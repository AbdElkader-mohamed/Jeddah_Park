const dir = $("html").attr("dir");

$(".owl-carousel--hero").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  rtl: dir == "rtl" ? true : false,
  items: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    480: {
      dots: true
    }
  }
});
$(".owl-carousel--trusted-by").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  rtl: dir == "rtl" ? true : false,
  autoplay: true,
  margin: 40,
  autoWidth: true,
  autoplaySpeed: 1000,
  responsive: {
    991: {
      items: 8
    }
  }
});
let clubStarsOptions = {
  loop: true,
  nav: true,
  dots: false,
  rtl: dir == "rtl" ? true : false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    991: {
      items: 3
    },
    0: {
      items: 2
    }
  }
};
$(".owl-carousel--club-stars-section").owlCarousel(clubStarsOptions);

let customersReviewsOptions = {
  loop: true,
  nav: true,
  dots: false,
  navText:
    dir == "rtl"
      ? [
          "<span><i class='fa-solid fa-arrow-right'></i></span>",
          "<span><i class='fa-solid fa-arrow-left'></i></span>"
        ]
      : [
          "<span><i class='fa-solid fa-arrow-left'></i></span>",
          "<span><i class='fa-solid fa-arrow-right'></i></span>"
        ],
  rtl: dir == "rtl" ? true : false,
  autoplay: true,
  margin: 22,
  autoplaySpeed: 1000,
  responsive: {
    991: {
      items: 2.5
    }
  }
};
$(".owl-carousel--customers-reviews").owlCarousel(customersReviewsOptions);

if ($(window).width() < 991) {
  $(".owl-carousel--club-stars-section,.owl-carousel--customers-reviews")
    .addClass("destroy")
    .trigger("destroy.owl.carousel");
} else {
  $(".owl-carousel--customers-reviews").owlCarousel(customersReviewsOptions);
  $(".owl-carousel--club-stars-section").owlCarousel(clubStarsOptions);
  $(
    ".owl-carousel--club-stars-section,.owl-carousel--customers-reviews"
  ).removeClass("destroy");
}
$(window).resize(function () {
  if ($(window).width() < 991) {
    $(".owl-carousel--club-stars-section,.owl-carousel--customers-reviews")
      .addClass("destroy")
      .trigger("destroy.owl.carousel");
  } else {
    $(".owl-carousel--customers-reviews").owlCarousel(customersReviewsOptions);
    $(".owl-carousel--club-stars-section").owlCarousel(clubStarsOptions);
    $(
      ".owl-carousel--club-stars-section,.owl-carousel--customers-reviews"
    ).removeClass("destroy");
  }
});
