import React from "react";
// import { Button } from "@salesforce/design-system-react";
//
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "animate.css";
import "swiper/swiper-bundle.css";
import "aos/dist/aos.css";
import Swiper from "swiper";
import AOS from "aos/";
import Layzr from "layzr.js";
//
import "./styles/App.scss";
//
const swiperParams = {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
const aosParams = {};
const swiper = new Swiper(".swiper-container", swiperParams);
AOS.init(aosParams);
const instance = Layzr();

function App() {
  return <div className="app" style={{ display: "none" }}></div>;
}

export default App;
