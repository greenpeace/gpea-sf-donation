import { Swiper, Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
//
const swiperParams = {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
};

const getScrollTop = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
};

const showCTABottom = () => {
  console.log("show");
};

const handleScroll = () => {
  let scrollDepth = getScrollTop();
  let scrollPassed = false;
  const landing = document.querySelector(".section_landing");
  if (scrollDepth > landing.offsetHeight + landing.offsetTop) {
    scrollPassed = true;
  } else {
    scrollPassed = false;
  }
  if (scrollPassed) {
    showCTABottom();
  }
};

const getUrlParams = () => {
  const { searchParams } = new URL(window.location.href);
  let p = {};
  for (let [k, v] of searchParams.entries()) {
    p[k] = v;
  }
  return p;
};

document.addEventListener("DOMContentLoaded", () => {
  // window.addEventListener("scroll", handleScroll);
  let params = getUrlParams();
  for (var i = 1; i <= 4; i++) {
    console.log(`.s${i}`);
    if (document.querySelector(`.s${i}`)) {
      document.querySelector(`.s${i}`).style.display = "none";
    }
  }
  if (params.step >= 1) {
    document.querySelector(`.s${params.step}`).style.display = "block";
  } else {
    document.querySelector(".s1").style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(".swiper-container", swiperParams);
  // eslint-disable-next-line no-unused-vars
  const swiperMixedContent = new Swiper(
    ".section-mixed-content .swiper-container--mixed",
    {
      slidesPerView: 1,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    }
  );
});
