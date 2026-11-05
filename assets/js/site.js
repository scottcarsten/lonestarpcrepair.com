(function () {
  'use strict';
  var root = document.documentElement;
  root.className += ' js';

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    var small = window.matchMedia('(max-width: 768px)');

    function setOpen(open) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.setAttribute('data-open', open ? 'true' : 'false');
    }
    function sync() { setOpen(!small.matches); }

    if (btn && nav) {
      sync();
      if (small.addEventListener) { small.addEventListener('change', sync); }
      btn.addEventListener('click', function () {
        setOpen(btn.getAttribute('aria-expanded') !== 'true');
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && small.matches && btn.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          btn.focus();
        }
      });
      nav.addEventListener('click', function (e) {
        if (small.matches && e.target.closest && e.target.closest('a')) { setOpen(false); }
      });
    }

    var forms = document.querySelectorAll('form.js-form');
    Array.prototype.forEach.call(forms, function (form) {
      var msg = form.querySelector('.form-msg');
      var file = form.querySelector('input[type=file]');
      var hint = form.querySelector('.file-hint');
      if (file && hint) {
        file.addEventListener('change', function () {
          var f = file.files && file.files[0];
          var max = parseFloat(file.getAttribute('data-max-mb')) || 25;
          if (!f) { hint.textContent = ''; return; }
          var mb = f.size / 1048576;
          if (mb > max) {
            file.value = '';
            hint.textContent = 'That file is about ' + Math.ceil(mb) + ' MB, over the ' + max + ' MB limit. Please call 817-242-4941 and we will work out another way.';
          } else {
            hint.textContent = 'Selected: ' + f.name + ' (' + (mb < 0.1 ? 'under 1' : mb.toFixed(1)) + ' MB)';
          }
        });
      }
      if (msg && window.fetch && window.FormData) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var send = form.querySelector('button[type=submit]');
          send.disabled = true;
          msg.hidden = false;
          msg.textContent = 'Sending...';
          fetch(form.action, { method: 'POST', body: new FormData(form) })
            .then(function (r) {
              if (!r.ok) { throw new Error('bad status'); }
              form.reset();
              if (hint) { hint.textContent = ''; }
              msg.textContent = 'Got it. A real person reads every message and will get back to you.';
            })
            .catch(function () {
              msg.textContent = 'That did not go through. Please call 817-242-4941 and we will sort it out.';
            })
            .then(function () { send.disabled = false; });
        });
      }
    });
  });
})();
