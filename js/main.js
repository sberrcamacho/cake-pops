(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (toggle && mobileNav) {
    var closeMenu = function () {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    var mediaQuery = window.matchMedia('(min-width: 760px)');
    var handleBreakpointChange = function (e) {
      if (e.matches) closeMenu();
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleBreakpointChange);
    } else {
      mediaQuery.addListener(handleBreakpointChange);
    }
  }

  var yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
