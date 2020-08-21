import React from "react";
// import { Button } from "@salesforce/design-system-react";
//
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
// import "aos/dist/aos.css";
// import AOS from "aos/";
//
import "./styles/App.scss";
//
const swiperParams = {
  loop: true,
  loopedSlides: 1,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
  },
  breakpoints: {
    991: {
      spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      },
    },
  },
};
const swiper = new Swiper(".swiper-container", swiperParams);
const aosParams = {
  easing: "ease-in-out-cubic",
  once: true,
  disable: "phone",
};
// AOS.init(aosParams);
function App() {
  return <div className="app" style={{ display: "none" }}></div>;
}

export default App;
