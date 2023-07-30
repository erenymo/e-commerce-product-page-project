"use strict";

const body = document.querySelector("body");
const menuCart = document.querySelector(".menu__cart");
const overlay = document.querySelector(".overlay");
const overlayLightbox = document.querySelector(".overlay__lightbox");
const detailsCart = document.querySelector(".cart--details");
const emptyCart = document.querySelector(".cart--empty");
const itemAmountCounter = document.querySelector(".item__amount--counter");
const btnCart = document.querySelector(".icon__cart");
const btnDeleteCart = document.querySelector(".icon__cart--delete");
const btnPlusAmount = document.querySelector(".btn__plus");
const btnMinusAmount = document.querySelector(".btn__minus");
const btnAddToCart = document.querySelector(".btn__addToCart");
const itemAmountEl = document.querySelectorAll(".item__amount");
const itemAmountCart = document.querySelector(".item__amount--cart");
const totalPriceEl = document.querySelector(".total__price");
const itemPriceEl = document.querySelector(".item__price");
const sliderContainer = document.querySelector(".slider");
const lightbox = document.querySelector(".lightbox");
const btnNext = document.querySelector(".btn__next");
const btnPrevious = document.querySelector(".btn__previous");
const btnMenu = document.querySelector(".btn__menu");
const menuNav = document.querySelector(".nav__mobile");
const overlayNav = document.querySelector(".overlay__nav");
const btnMenuClose = document.querySelector(".btn__menu--close");

let itemAmount = 0;
let itemPrice = 125.0;

////////// Functions
const updateUI = function () {
  itemAmountCounter.textContent = itemAmount;
  itemAmountEl.forEach((item) => (item.textContent = itemAmount));
  if (itemAmount <= 0) {
    itemAmountCart.classList.add("hidden");
    detailsCart.classList.add("hidden");
    emptyCart.classList.remove("hidden");
  } else {
    itemAmountCart.classList.remove("hidden");
  }

  if (itemAmount > 0) {
    emptyCart.classList.add("hidden");
    detailsCart.classList.remove("hidden");
    let totalPrice = itemPrice * itemAmount;
    itemPriceEl.textContent = `$${itemPrice.toFixed(2)}`;
    totalPriceEl.textContent = `$ ${totalPrice.toFixed(2)}`;
  }
};
updateUI();

const openMenuCart = function () {
  menuCart.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeMenuCart = function () {
  menuCart.classList.add("hidden");
  overlay.classList.add("hidden");
};

const deleteMenuCart = function () {
  detailsCart.classList.add("hidden");
  emptyCart.classList.remove("hidden");
  itemAmount = 0;
  updateUI();
};

const increaseAmount = function () {
  itemAmount++;
  itemAmountCounter.textContent = itemAmount;
};

const decreaseAmount = function () {
  if (itemAmount <= 0) return;
  itemAmount--;
  itemAmountCounter.textContent = itemAmount;
};

const addToCart = function () {
  updateUI();
};

// Slider-1
const sliderThumbnail = function () {
  const slides = document.querySelectorAll(".slide");
  const thumbnailContainer = document.querySelector(".thumbnails");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createThumbs = function () {
    slides.forEach((_s, i) => {
      thumbnailContainer.insertAdjacentHTML(
        "beforeend",
        `<button data-slide="${i}" class="thumbs__thumb border-2 border-orange overflow-hidden duration-200 opacity-40 rounded-xl hover:opacity-40">
      <img
        src="./images/image-product-${i + 1}-thumbnail.jpg"
        data-slide="${i}"
        class="thumbs__thumb w-full  hover:opacity-80"
        alt="product-1 thumbnail"
      />
    </button>`
      );
    });
  };

  createThumbs();

  const activateThumb = function (slide) {
    document.querySelectorAll(".thumbs__thumb").forEach((thumb) => {
      thumb.classList.remove("border-2", "border-orange", "opacity-40");
    });
    document
      .querySelector(`.thumbs__thumb[data-slide="${slide}"]`)
      .classList.add("border-2", "border-orange", "opacity-40");

    curSlide = slide;
  };
  activateThumb(curSlide);

  const switchImage = function (slide) {
    slides.forEach((s) => {
      if (s.classList.contains(`slide--${Number(slide) + 1}`)) {
        s.classList.remove("hidden");
      } else {
        s.classList.add("hidden");
      }
    });
  };

  thumbnailContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("thumbs__thumb")) {
      const { slide } = e.target.dataset;

      activateThumb(slide);
      switchImage(slide);
    }
  });
};
sliderThumbnail();

const openLightbox = function () {
  overlayLightbox.classList.remove("hidden");
  lightbox.classList.remove("hidden");
};

const closeLightbox = function () {
  lightbox.classList.add("hidden");
  overlayLightbox.classList.add("hidden");
};

const openMobileNav = function () {
  overlayNav.classList.remove("hidden");
  menuNav.classList.remove("hidden");
};

const closeMobileNav = function () {
  overlayNav.classList.add("hidden");
  menuNav.classList.add("hidden");
};

const sliderLightbox = function () {
  const slidesLight = document.querySelectorAll(".slideLightbox");
  let curLightSlide = 0;
  const maxSlide = slidesLight.length;

  const switchImage = function (slide) {
    slidesLight.forEach((s) => {
      if (s.classList.contains(`slide--${Number(slide) + 1}`)) {
        s.classList.remove("hidden");
      } else {
        s.classList.add("hidden");
      }
    });
  };

  btnNext.addEventListener("click", function () {
    if (curLightSlide < maxSlide - 1) {
      curLightSlide++;
      switchImage(curLightSlide);
    } else {
      curLightSlide = 0;
      switchImage(curLightSlide);
    }
  });

  btnPrevious.addEventListener("click", function () {
    if (curLightSlide > 0) {
      curLightSlide--;
      switchImage(curLightSlide);
    } else {
      curLightSlide = maxSlide - 1;
      switchImage(curLightSlide);
    }
  });
};
sliderLightbox();

//////////// Event Handlers

// Mobile Navbar
btnMenu.addEventListener("click", openMobileNav);
overlayNav.addEventListener("click", closeMobileNav);
btnMenuClose.addEventListener("click", closeMobileNav);

// Toggle Menu Cart
btnCart.addEventListener("click", openMenuCart);
btnDeleteCart.addEventListener("click", deleteMenuCart);
overlay.addEventListener("click", closeMenuCart);

// increase item amount
btnPlusAmount.addEventListener("click", increaseAmount);
btnMinusAmount.addEventListener("click", decreaseAmount);

// add to cart
btnAddToCart.addEventListener("click", addToCart);

// open lightbox
sliderContainer.addEventListener("click", openLightbox);
overlayLightbox.addEventListener("click", closeLightbox);
