import React from "react";
// vendor
// import { Button } from "@salesforce/design-system-react";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "animate.css";
// import Swiper JS
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
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
const swiper = new Swiper(".swiper-container", swiperParams);

function App() {
  return <div className="app" style={{ display: "none" }}></div>;
}

export default App;
