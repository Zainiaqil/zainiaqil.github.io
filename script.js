/* ============================================================
   # PORTFOLIO ZAINI - JAVASCRIPT
   # Edit fungsi bahasa, menu HP, animasi scroll, dan tahun di sini.
   ============================================================ */

// # 01 - SWITCHER BAHASA INDONESIA / INGGRIS
// Language switcher: teks awal disimpan agar pergantian bahasa konsisten.
    let currentLang = 'ID';
    const langButton = document.getElementById('langBtn');
    langButton.addEventListener('click', () => {
      currentLang = currentLang === 'ID' ? 'EN' : 'ID';
      document.documentElement.lang = currentLang.toLowerCase();
      document.querySelectorAll('.lang-text').forEach((element) => {
        const translated = element.dataset[currentLang.toLowerCase()];
        if (translated) element.textContent = translated;
      });
      langButton.textContent = currentLang === 'ID' ? 'EN / ID' : 'ID / EN';
    });

    // # 02 - MENU NAVIGASI MOBILE
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '×' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));

    // # 03 - ANIMASI SAAT SCROLL (REVEAL)
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
    } else {
      document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
    }

    // # 04 - TAHUN OTOMATIS DI FOOTER
    document.getElementById('year').textContent = new Date().getFullYear();
