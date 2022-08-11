document.addEventListener("DOMContentLoaded", function() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                console.log("lazy loading ", lazyImage)
                lazyImage.src = lazyImage.dataset.src
                lazyImage.classList.remove("lzy_img");
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr = document.querySelectorAll('img.lzy_img')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})


var menu = ['Поклонная гора', 'Москва Сити', 'Матвеевский лес'];

new Swiper('.relax-slider', {
    autoHeight: true,
    preloadImages: false,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '\
            <div class="box ' + className + '">\
            <div class="text">' + (menu[index]) + '</div>\
            </div>';
       },
    },
    simulateTouch: false,
    slidesPerView: 1.15, 
    centeredSlides: true,
    loop: true,
    speed: 800,
    spaceBetween: 20,
    initialSlide: 0,
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
});


const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');


modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
  const modalId = this.dataset.modalButton;
  const modal = document.querySelector('#' + modalId);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'

  modal.querySelector('.modal__container-all').addEventListener('click', function (e) {
    e.stopPropagation();
  });
})
})


modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
      const modal = this.closest('[data-modal]');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'
  })


  allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.remove('active');
        document.body.style.overflow = 'auto'
  });
});
})



const testStart = document.querySelectorAll('.test__btn');
const testBack = document.querySelectorAll('.test__btn-back');
const btnPlaning = document.querySelectorAll('.btn__planing');
const contentParking = document.querySelector('.test__content-parking');

testStart.forEach(function(btn) {
    btn.addEventListener('click', function(){
        btn.parentElement.classList.add('unactive');
        setTimeout(() => btn.parentElement.classList.add('none'), 500);
        let nextItem = btn.parentElement.nextElementSibling;
        nextItem.classList.add('active');
        setTimeout(() => nextItem.classList.remove('none'), 500);
    });
});

testBack.forEach(function(btn) {
    btn.addEventListener('click', function(){
        btn.parentElement.classList.add('unactive');
        setTimeout(() => btn.parentElement.classList.add('none'), 500);
        let nextItem = btn.parentElement.previousElementSibling;
        nextItem.classList.add('active');
        setTimeout(() => nextItem.classList.remove('none'), 500);
    });
});


btnPlaning.forEach(function(btn) {
    btn.addEventListener('click', function(){
        btn.parentElement.classList.add('unactive');
        setTimeout(() => contentParking.classList.add('none'), 500);
        let nextItem = contentParking.nextElementSibling;
        nextItem.classList.add('active');
        setTimeout(() => nextItem.classList.remove('none'), 500);
    });
});


