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

  var nequiButton = document.querySelector('[data-copy-nequi]');
  var nequiStatus = document.querySelector('[data-copy-status]');

  if (nequiButton && nequiStatus) {
    var DEFAULT_STATUS = 'Toca para copiar';
    var resetTimer;

    var showStatus = function (text) {
      nequiStatus.textContent = text;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        nequiStatus.textContent = DEFAULT_STATUS;
      }, 2600);
    };

    var copyFallback = function () {
      try {
        var textarea = document.createElement('textarea');
        textarea.value = '3145877853';
        textarea.setAttribute('readonly', '');
        textarea.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(textarea);
        textarea.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        showStatus(ok ? 'Número copiado' : 'Copia el número manualmente');
      } catch (e) {
        showStatus('Copia el número manualmente');
      }
    };

    nequiButton.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('3145877853').then(
          function () { showStatus('Número copiado'); },
          copyFallback
        );
      } else {
        copyFallback();
      }
    });
  }
})();
