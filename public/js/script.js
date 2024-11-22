document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target);
      const isOpen = target.classList.contains('active');
  
      // Cierra todas las demás
      document.querySelectorAll('.accordion-content').forEach(content => {
        content.classList.remove('active');
        content.style.maxHeight = '0';
      });
  
      // Abre o cierra el seleccionado
      if (!isOpen) {
        target.classList.add('active');
        target.style.maxHeight = target.scrollHeight + 'px';
      }
    });
  });