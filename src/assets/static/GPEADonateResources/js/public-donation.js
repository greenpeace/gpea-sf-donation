$(function () {
  //scroll
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].boundingClientRect.y < 0) {
        document.body.classList.add("bottom-fix");
      } else {
        document.body.classList.remove("bottom-fix");
      }
    });
    observer.observe(document.querySelector(".form__donate-btn"));
  }

  //pararell
  var image = document.getElementsByClassName("topimg-move");
  new simpleParallax(image, {
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
  });

  $(".form__close").click(function () {
    $(".main__form-moblie-wrapper").css("bottom", "-1000px");
    $("body").removeClass("fullscreen-form");
  });

  //move to form
  $(".header__donate-btn a").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".main__top-img").offset().top },
      "slow"
    );
  });

  //form collaped
  var btnColF = document.getElementsByClassName("form__full");

  for (i = 0; i < btnColF.length; i++) {
    btnColF[i].addEventListener("click", function () {
      var wrapperM = document.getElementsByClassName(
        "main__form-moblie-wrapper"
      )[0];
      var wrapper = document.getElementsByClassName("main__form-wrapper")[0];
      wrapperM.style.bottom = null;

      $("body").addClass("fullscreen-form");
    });
  }

  //slide
  $(".carousel__container").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
