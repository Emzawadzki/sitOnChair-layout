document.addEventListener('DOMContentLoaded', function () {
  
  var banners = document.querySelectorAll('.banner-slide');
  var buttonNextSlide = document.querySelector('#btn-next');
  var buttonPrevSlide = document.querySelector('#btn-prev');
  var slideQuantity = 0;
  var activeBanner, activeBannerIndex, prevBanner, nextBanner, futureNextBanner, futureNextBannerIndex, futurePrevBanner, futurePrevBannerIndex;
  
  // Add banners dataset index
  for (let i = 0; i < banners.length; i++) {
    banners[i].dataset.slideNumber = i;
    slideQuantity++;
  }
  slideQuantity--;

  // Change slide next
  var slideChangeNext = function (e) {
    // finding active banner
    activeBanner = document.querySelector('.banner-slide-active');
    activeBannerIndex = activeBanner.dataset.slideNumber;
    // finding next banner
    nextBanner = document.querySelector('.banner-slide-next');
    nextBannerIndex = nextBanner.dataset.slideNumber;
    // finding prev banner
    prevBanner = document.querySelector('.banner-slide-prev');
    prevBannerIndex = prevBanner.dataset.slideNumber;

    // finding future next banner
    if (Number(nextBannerIndex) === slideQuantity) {
      futureNextBannerIndex = 0;
    } else {
      futureNextBannerIndex = Number(nextBannerIndex) + 1;
    }
    futureNextBanner = banners[futureNextBannerIndex];

    // slide
    prevBanner.classList.remove('banner-slide-prev');
    activeBanner.classList.add('banner-slide-prev');
    activeBanner.classList.remove('banner-slide-active');
    nextBanner.classList.remove('banner-slide-next');
    nextBanner.classList.add('banner-slide-active');
    futureNextBanner.classList.add('banner-slide-next');
  }

  // Change slide prev
  var slideChangePrev = function (e) {
    // finding active banner
    activeBanner = document.querySelector('.banner-slide-active');
    activeBannerIndex = activeBanner.dataset.slideNumber;
    // finding next banner
    nextBanner = document.querySelector('.banner-slide-next');
    nextBannerIndex = nextBanner.dataset.slideNumber;
    // finding prev banner
    prevBanner = document.querySelector('.banner-slide-prev');
    prevBannerIndex = prevBanner.dataset.slideNumber;

    // finding future prev banner
    if (Number(prevBannerIndex) === 0) {
      futurePrevBannerIndex = slideQuantity;
    } else {
      futurePrevBannerIndex = Number(prevBannerIndex) - 1;
    }
    futurePrevBanner = banners[futurePrevBannerIndex];

    // slide
    nextBanner.classList.remove('banner-slide-next');
    activeBanner.classList.add('banner-slide-next');
    activeBanner.classList.remove('banner-slide-active');
    prevBanner.classList.remove('banner-slide-prev');
    prevBanner.classList.add('banner-slide-active');
    futurePrevBanner.classList.add('banner-slide-prev');

  }
  
  buttonNextSlide.addEventListener('click', slideChangeNext);
  buttonPrevSlide.addEventListener('click', slideChangePrev);
})