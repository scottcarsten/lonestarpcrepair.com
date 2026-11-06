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
  });
})();
