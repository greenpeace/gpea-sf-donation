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

const isHidden = function (elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
};

const innerHeight = () => {
  const getWindowHeight = () => {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName("body")[0].clientHeight
    );
  };
  const getDocumentHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  };
  return getDocumentHeight() - getWindowHeight();
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

document.addEventListener("DOMContentLoaded", () => {
  // window.addEventListener("scroll", handleScroll);
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
