import React from "react";
// import { Button } from "@salesforce/design-system-react";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import { Swiper, Navigation, Pagination } from "swiper";
import parallax from "./scripts/parallax";
//
import "./styles/App.scss";
//
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

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(".swiper-container", swiperParams);
  const swiperMixedContent = new Swiper(
    ".section-mixed-content .swiper-container--mixed",
    {
      slidesPerView: 1,
      simulateTouch: false,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    }
  );
  parallax();
});

function App() {
  return <div className="app" style={{ display: "none" }}></div>;
}

export default App;
