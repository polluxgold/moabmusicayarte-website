document.addEventListener('DOMContentLoaded', function () {
  // Persist language choice across pages
  var savedLang = null;
  try { savedLang = window.localStorage.getItem('moab-lang'); } catch (e) {}
  if (savedLang === 'en' || savedLang === 'es') {
    document.documentElement.setAttribute('data-lang', savedLang);
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-set-lang') === savedLang);
    });
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-set-lang');
      document.documentElement.setAttribute('data-lang', lang);
      document.querySelectorAll('[data-set-lang]').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      try { window.localStorage.setItem('moab-lang', lang); } catch (e) {}
    });
  });

  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
