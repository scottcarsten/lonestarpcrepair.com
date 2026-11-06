# lonestarpcrepair.com

Static site for Lone Star PC Repair, a local computer repair business in Granbury TX. Hosted on GitHub Pages. Plain HTML, one CSS file, a little vanilla JS for the mobile menu. No trackers, no chat widgets, no third party requests. Keep `CNAME`.

## Rules for copy

- No prices. Free quote.
- Only phone: (817) 904-4877 (`tel:+18179044877`). Email: service@lonestarpcrepair.com.
- No street address. Service area is local to Granbury and the limited surrounding area, with the town list. No Fort Worth, no Dallas.
- Write for a visitor who has a problem and is searching for help. Do not describe where or how the work is physically done.
- The call to action everywhere is: Call (817) 904-4877 for more information or to schedule an appointment.
- Laptop screens only. No phone, iPhone, iPad or tablet screens.
- No em or en dashes, no parentheses in visible copy, no "e.g." or "i.e.".
- Forms are mailto only. GitHub Pages has no backend.

## Pages

Home, services, six service pages (virus, spyware and malware repair, Windows repair and reinstall, upgrades, laptop screen, laptop keyboard, data transfer), service area, how it works (`/how-it-works/`), about, contact, 404, and five SEO landing pages. Every page has a unique title and description and the same ComputerRepair JSON-LD (towns in `areaServed`, no street address).

The home page has a commented `TEASER VIDEO SLOT` under the hero for a future teaser. No video files are in the repo.

## Old database pages

The old URL of the how-it-works page is also a redirect stub (meta refresh 0, canonical, noindex, JS replace, one link) to `/how-it-works/` and is not in the sitemap.

These paths are redirect stubs (meta refresh 0, canonical, noindex, JS replace, one link) to the same path on https://lonestaritservice.com/: data-rescue, script-shop, access-unrecognized-database-format, excel-file-corrupted-cannot-be-opened, mysql-table-marked-as-crashed, quickbooks-company-file-wont-open, sql-server-database-suspect-mode, custom-powershell-scripts-for-small-business. They are not in the sitemap. The home page footer links to Lone Star IT Service for stuck database or file rescue.

## Why these five landing pages (searched 2026-11-06)

1. `/computer-repair-granbury-tx/` The core local phrase "computer repair Granbury TX". Results are all directories (BBB, Angi, HomeAdvisor) and a handful of small businesses, so a real local site can compete. Highest intent term.
2. `/virus-removal-near-me-granbury/` "virus removal near me" is a standard near me service search, and malware cleanup is the most common repair people want. Ties into the popup scam traffic.
3. `/laptop-screen-replacement-granbury/` "laptop screen replacement" and "near me" results are mostly out of town businesses and cost guides. Granbury results for screens are mainly phone repair businesses, so a laptop specific local page fills a gap. Also states laptops only up front.
4. `/fake-microsoft-support-popup-scam/` Search results show heavy, current interest: Microsoft Q&A threads, malwaretips guides, Dallas News coverage, many "how to close" posts. Scared people search this and then need a human. Gives safe steps and a path to a real local tech.
5. `/blue-screen-of-death-computer-wont-boot/` Constant volume on "blue screen of death fix Windows 11", with Microsoft Tech Community threads and many guides on startup repair, update removal and stop codes. The page gives the safe first steps and a path to a real local tech when they fail.

Search volume numbers were not available through the tools used. The choices rest on what ranks and who is answering, not on measured volume. Windows 10 end of support (October 14, 2025) is covered on the upgrades page.

## Maintenance

Add new pages to `sitemap.xml`. Update `lastmod` when pages change.
