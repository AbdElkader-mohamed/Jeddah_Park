// import copyCurrentPageURL from "./helpers/copyCurrentPageURL.js";
// $("#copyBtn").click(copyCurrentPageURL);
$(document).ready(function () {
  // magnificPopup init for videos
  if (document.querySelector(".popup-youtube")) {
    $(".popup-youtube").magnificPopup({
      type: "iframe",
      mainClass: "mfp-with-zoom",
      removalDelay: 1000,
      preloader: false,
      fixedContentPos: false
    });
  }
  if (document.querySelector(".second-banner")) {
    $(".counter").counterUp({
      delay: 1,
      time: 500,
      offset: 70,
      beginAt: 100
    });
  }
  if (document.querySelector(".wow")) {
    new WOW({ duration: 1 }).init();
  }
  if (document.querySelector(".lazy")) {
    $(".lazy").lazy();
  }
  if (document.querySelector("select")) {
    $("select").niceSelect();
  }
  if (document.querySelector("#searchInput")) {
    document
      .getElementById("searchInput")
      .addEventListener("keyup", function () {
        if ($("#searchInput").val() == "") {
          $("#searchModalData").fadeOut(500);
        } else {
          $("#searchModalData").fadeIn(500);
        }
      });
  }
  if (document.querySelector(".popup-gallery")) {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return (
            item.el.attr("title") +
            ' &middot; <a class="image-source-link" href="' +
            item.el.attr("data-source") +
            '" target="_blank">image source</a>'
          );
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function (element) {
          return element.find("img");
        }
      }
    });
  }
});
