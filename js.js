 (function() {
    'use strict';

    // --- FECHA ---
    const now = new Date();
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    document.getElementById('sketchDate').textContent = '📅 ' + d + ' / ' + m + ' / ' + y;

    // --- NAVEGACIÓN ---
    const navLinks = document.querySelectorAll('.sketch-nav a');
    const pages = {
      home: document.getElementById('page-home'),
      productos: document.getElementById('page-productos'),
      almacen: document.getElementById('page-almacen'),
      ventas: document.getElementById('page-ventas'),
      dashboard: document.getElementById('page-dashboard')
    };

    function navigateTo(pageId) {
      // Ocultar todas las páginas
      Object.values(pages).forEach(p => p.classList.remove('active'));
      // Mostrar la seleccionada
      if (pages[pageId]) pages[pageId].classList.add('active');

      // Actualizar clase activa en navegación
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
          link.classList.add('active');
        }
      });

      // Scroll al inicio de la página (suave)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Eventos de clic en navegación
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        if (pageId) navigateTo(pageId);
      });
    });

    // También para los enlaces de "Accesos rápidos" en Inicio
    document.querySelectorAll('a[data-page]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        if (pageId) navigateTo(pageId);
      });
    });

    // Exponer función globalmente para el botón del dashboard
    window.navigateTo = navigateTo;

  })();