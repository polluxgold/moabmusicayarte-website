# MOAB Music Academy — Nonprofit Site

A bilingual (EN/ES) static website for MOAB Music Academy, an independent nonprofit dedicated to music education. Built as plain HTML/CSS/JS with no build step — open `index.html` directly in a browser, or serve the folder with any static file server.

## Structure

```
.
├── index.html          Home page (hero, mission, impact, testimonials)
├── css/
│   └── styles.css      Shared stylesheet for all pages
├── js/
│   └── script.js       Shared behavior: language toggle, mobile nav
├── pages/
│   ├── about.html       About Us + Team
│   ├── programs.html    Programs overview + detail gallery
│   ├── events.html      Events gallery
│   ├── support.html     Donate / support options
│   └── faq-contact.html FAQ + Contact info (merged)
├── images/              Reserved for locally hosted images (currently images are
│                        hotlinked from moabacademiademusica.com — see note below)
└── data/                Reserved for structured content (team, events, programs)
                         if the site is later migrated to a templated/data-driven build
```

## Notes

- **Images**: All photos currently reference the original organization's WordPress media
  library (`moabacademiademusica.com/wp-content/uploads/...`). Since this is now an
  independent site, consider downloading and re-hosting these assets locally in `images/`
  and updating the `<img>`/`<figure>` sources across the HTML files.
- **Donation links**: The Zeffy donation form and WhatsApp payment links still point to the
  original organization's accounts. Update these once the nonprofit has its own donation
  processor set up.
- **Language toggle**: Implemented via `data-i18n-en` / `data-i18n-es` spans and a small
  CSS/JS switch. The chosen language persists across page loads via `localStorage`.
- **No build tools required.** All pages share `css/styles.css` and `js/script.js` via
  relative paths (`../css/styles.css` and `../js/script.js` from inside `pages/`).
