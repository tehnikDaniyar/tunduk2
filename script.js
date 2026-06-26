const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

const loader = document.querySelector('.loader');

setTimeout(() => {
   loader.classList.add('hidden')
}, 2000
);