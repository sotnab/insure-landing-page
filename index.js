function main() {
   const iconContainer = document.querySelector('.header_toggle');
   const menu = document.querySelector('.menu');
   const openIcon = document.getElementById('open-icon');
   const closeIcon = document.getElementById('close-icon');

   setIcon();

   iconContainer.addEventListener('click', () => {
      menu.classList.toggle('menu--opened');
      setIcon();
   });

   function setIcon() {
      const isOpened = menu.classList.contains('menu--opened');
      if (isOpened) {
         closeIcon.style.display = 'block';
         openIcon.style.display = 'none';
      } else {
         closeIcon.style.display = 'none';
         openIcon.style.display = 'block';
      }
   }
}

document.addEventListener('DOMContentLoaded', main);
