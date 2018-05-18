document.addEventListener('DOMContentLoaded', function () {

  // *** SLIDER ***

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

  // *** CALC FORM ***

  // drop down
  var dropdownLists = document.querySelectorAll('.calc .dropdown-list');


  for (var i = 0; i < dropdownLists.length; i++) {
    dropdownLists[i].addEventListener('click', function () {
      var list = this.querySelector('ul');
      list.classList.toggle('hidden');
    })
  }

  // dropdown select
  // chair type
  var chairTypeSelector = document.querySelector('#chairType');
  var chairTypeContainer = dropdownLists[0].querySelector('ul');;
  var chairTypeList = chairTypeContainer.querySelectorAll('li');
  var chairTypeOutput = document.querySelector('.calc-form-summary-content-chair');
  var chairTypePriceOutput = document.querySelector('.calc-form-summary-content-chair-price');

  // chair color
  var chairColorSelector = document.querySelector('#chairColor');
  var chairColorContainer = dropdownLists[1].querySelector('ul');;
  var chairColorList = chairColorContainer.querySelectorAll('li');
  var chairColorOutput = document.querySelector('#chairColorOutput');
  var chairColorPriceOutput = document.querySelector('#chairColorPrice');

  // chair material
  var chairMaterialSelector = document.querySelector('#chairMaterial');
  var chairMaterialContainer = dropdownLists[2].querySelector('ul');;
  var chairMaterialList = chairMaterialContainer.querySelectorAll('li');
  var chairMaterialOutput = document.querySelector('#chairMaterialOutput');
  var chairMaterialPriceOutput = document.querySelector('#chairMaterialPrice');

  //  chair type function
  for (var i = 0; i < chairTypeList.length; i++) {
    chairTypeList[i].addEventListener('click', function (e) {
      chairTypeOutput.innerText = this.innerText;
      chairTypeSelector.innerText = this.innerText;
      chairTypePriceOutput.innerText = this.dataset.price;
      chairTypeSelector.classList.add('list-label-selected');
      sumOrderPrice();
    });
  }

  //  chair color function
  for (var i = 0; i < chairColorList.length; i++) {
    chairColorList[i].addEventListener('click', function (e) {
      chairColorOutput.innerText = this.innerText;
      chairColorSelector.innerText = this.innerText;
      chairColorPriceOutput.innerText = this.dataset.price;
      chairColorSelector.classList.add('list-label-selected');
      sumOrderPrice();
    });
  }

  //  chair material function
  for (var i = 0; i < chairMaterialList.length; i++) {
    chairMaterialList[i].addEventListener('click', function (e) {
      chairMaterialOutput.innerText = this.innerText;
      chairMaterialSelector.innerText = this.innerText;
      chairMaterialPriceOutput.innerText = this.dataset.price;
      chairMaterialSelector.classList.add('list-label-selected');
      sumOrderPrice();
    });
  }

  // chair transport
  var chairTransportCheckbox = document.querySelector('#chairTransport');
  var chairTransportOutput = document.querySelector('#chairTransportOutput');
  var chairTransportPriceOutput = document.querySelector('#chairTransportPrice');
  
  chairTransportCheckbox.addEventListener('click', function() {
    if(chairTransportCheckbox.checked) {
      chairTransportOutput.innerText = 'transport';
      chairTransportPriceOutput.innerText = Number(this.dataset.price);
    } else {
      chairTransportOutput.innerText = '';
      chairTransportPriceOutput.innerText = '';
    }
    sumOrderPrice();
  })
  
  // sum function
  var sumOutput = document.querySelector('.calc-form-summary-sum-price');
  
  var sumOrderPrice = function() {
    var sum = Number(chairTypePriceOutput.innerText) + Number(chairColorPriceOutput.innerText) + Number(chairMaterialPriceOutput.innerText) + Number(chairTransportPriceOutput.innerText);
    sumOutput.innerText = sum + " zł";
  }


})