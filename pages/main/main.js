const typeForm = document.forms.type,
	  tickets = typeForm.elements.tickets,
	  basicBtnDec = document.querySelector('#basic-btn-dec'),
	  basicBtnInc = document.querySelector('#basic-btn-inc'),
	  seniorBtnDec = document.querySelector('#senior-btn-dec'),
	  seniorBtnInc = document.querySelector('#senior-btn-inc'),
	  basicInput = document.querySelector('#basic-input'),
	  seniorInput = document.querySelector('#senior-input'),
	  buyNowBtn = document.querySelector('#buy-now-btn');

basicBtnDec.addEventListener('click', function(){
	if (basicInput.value < 1) return;
	basicInput.value--;
});

basicBtnInc.addEventListener('click', () => basicInput.value++);

seniorBtnDec.addEventListener('click', function(){
	if (seniorInput.value < 1) return;
	seniorInput.value--;
});

seniorBtnInc.addEventListener('click', () => seniorInput.value++);

buyNowBtn.addEventListener('click', () => console.log(`Selected tickets type: ${tickets.value}; number of basic tickets: ${basicInput.value}; number of senior tickets: ${seniorInput.value}`));

const welcomeSwiper = new Swiper('.welcome-swiper', {
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    slideClass: 'welcome-swiper__slide',
    wrapperClass: 'welcome-swiper__wrapper',

    autoplay: {
      delay: 5000,
    },
  
    pagination: {
      el: '.welcome-swiper__pagination',
      type: 'bullets',
      bulletClass: 'welcome-swiper__pagination-bullet',
      bulletActiveClass: 'welcome-swiper__pagination-bullet-active',
      modifierClass: 'welcome-swiper__pagination-',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.welcome-swiper__btn-next',
      prevEl: '.welcome-swiper__btn-prev',
    },
});

const pages = document.querySelector('.welcome-swiper__pages');
const totalBullets = document.querySelectorAll('.welcome-swiper__pagination-bullet').length;

const currentPage = document.createElement('span');
currentPage.className = 'welcome-swiper__page';
currentPage.innerHTML = ++welcomeSwiper.realIndex;
pages.prepend(currentPage);

const totalPage = document.createElement('span');
totalPage.className = 'welcome-swiper__page';
totalPage.innerHTML = totalBullets;
pages.append(totalPage);

welcomeSwiper.on('transitionStart', () => {
  currentPage.innerHTML = ++welcomeSwiper.realIndex;
});

const videoSwiperXL = new Swiper('.video-swiper_xl', {
  speed: 1000,
  direction: 'horizontal',
  slideClass: 'video-swiper__slide',
  wrapperClass: 'video-swiper__wrapper',
  loop: true,

  lazy: {
    loadPrevNext: true,
  },

  pagination: {
    el: '.video-swiper__pagination',
    type: 'bullets',
    bulletClass: 'video-swiper__pagination-bullet',
    bulletActiveClass: 'video-swiper__pagination-bullet-active',
    modifierClass: 'video-swiper__pagination-',
    clickable: true,
  },

  navigation: {
    nextEl: '.video-swiper__btn-next',
    prevEl: '.video-swiper__btn-prev',
  },
});

const videoSwiperS = new Swiper('.video-swiper_s', {
  speed: 900,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 42,
  slideClass: 'video-swiper__slide',
  wrapperClass: 'video-swiper__wrapper',

  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  lazy: {
    loadPrevNext: true,
  },
 
  pagination: {
    el: '.video-swiper__pagination',
    type: 'bullets',
    bulletClass: 'video-swiper__pagination-bullet',
    bulletActiveClass: 'video-swiper__pagination-bullet-active',
    modifierClass: 'video-swiper__pagination-',
    clickable: true,
  },

  navigation: {
    nextEl: '.video-swiper__btn-next',
    prevEl: '.video-swiper__btn-prev',
  },
});