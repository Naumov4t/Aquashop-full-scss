'use strict';

const closeDiscountBannerBtn = document.querySelector('.discount-banner__close-btn');
const discountBanner = document.querySelector('.discount-banner');


closeDiscountBannerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    discountBanner.style.display = "none";
});

//tabs
const tabsBtn = document.querySelectorAll('.reviews-controller__item');
const tabsItems = document.querySelectorAll('.reviews-slider-item');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

       if(!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('reviews-controller__item--active')
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('reviews-slider-item--active')
            });

            currentBtn.classList.add('reviews-controller__item--active');
            currentTab.classList.add('reviews-slider-item--active');
       }
    })
})