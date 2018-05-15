document.addEventListener('DOMContentLoaded', function () {
  var banners = document.querySelectorAll('.banner-slide');
  var buttonNextSlide = document.querySelector('#btn-next');
  var buttonPrevSlide = document.querySelector('#btn-prev');
  var slideQuantity = 0;
  var newBanner, newBannerIndex;

  // Add numbers for banners
  for (let i = 0; i < banners.length; i++) {
    banners[i].dataset.slideNumber = i;
    slideQuantity++;
  }
  slideQuantity--;

  // Change slide next
  var slideChangeNext = function (e) {
    // hiding active banner
    var activeBanner = document.querySelector('.banner-slide-active');
    activeBanner.classList.remove('banner-slide-active');
    var activeBannerIndex = activeBanner.dataset.slideNumber;

    // finding next banner
    if (Number(activeBannerIndex) === slideQuantity) {
      newBannerIndex = 0;
    } else {
      newBannerIndex = Number(activeBannerIndex) + 1;
    }

    // showing new banner
    newBanner = banners[newBannerIndex];
    newBanner.classList.add('banner-slide-active');
  }

  buttonNextSlide.addEventListener('click', slideChangeNext);

  // Change slide prev
  var slideChangePrev = function (e) {
    // hiding active banner
    var activeBanner = document.querySelector('.banner-slide-active');
    activeBanner.classList.remove('banner-slide-active');
    var activeBannerIndex = activeBanner.dataset.slideNumber;

    // finding prev banner
    if (Number(activeBannerIndex) === 0) {
      newBannerIndex = slideQuantity;
    } else {
      newBannerIndex = Number(activeBannerIndex) - 1;
    }

    // showing new banner
    newBanner = banners[newBannerIndex];
    newBanner.classList.add('banner-slide-active');
  }

  buttonPrevSlide.addEventListener('click', slideChangePrev);

})