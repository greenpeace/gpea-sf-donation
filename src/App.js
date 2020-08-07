import React from "react";
// import { Button } from "@salesforce/design-system-react";
//
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "animate.css";
import "swiper/swiper-bundle.css";
import "aos/dist/aos.css";
import Swiper from "swiper";
import AOS from "aos/";
//
import "./styles/App.scss";
//
const swiperParams = {
  loop: true,
  loopedSlides: 1,
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    991: {
      spaceBetween: 20,
      pagination: false,
    },
  },
};
const aosParams = {
  easing: "ease-in-out-cubic",
  once: true,
  disable: "phone",
};
const swiper = new Swiper(".swiper-container", swiperParams);
AOS.init(aosParams);

function App() {
  return <div className="app" style={{ display: "none" }}></div>;
}

export default App;
