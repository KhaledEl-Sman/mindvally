// $(document).ready(function () {
//   let lastScrollTop = 0;

//   function ScrollDir() {
//     let current = $(this).scrollTop();
//     if (current > lastScrollTop && current > 200) {
//       $("nav").css("top", "-85px");
//     } else {
//       $("nav").css("top", "0");
//     }
//     lastScrollTop = current;
//   }

//   $(window).scroll(function () {
//     ScrollDir();
//   });
// });

$(document).ready(function () {
  //   function t() {
  //     $(window).scrollTop() >= $("#scale_recipe").offset().top &&
  //     $(window).scrollTop() < $("#growth_booster").offset().top
  //       ? ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(0).addClass("active"))
  //       : $(window).scrollTop() >= $("#growth_booster").offset().top &&
  //         $(window).scrollTop() < $("#patient_convert_program").offset().top
  //       ? ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(1).addClass("active"))
  //       : $(window).scrollTop() >= $("#patient_convert_program").offset().top &&
  //         $(window).scrollTop() < $("#reviews").offset().top
  //       ? ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(2).addClass("active"))
  //       : $(window).scrollTop() >= $("#reviews").offset().top &&
  //         $(window).scrollTop() < $("#pricing").offset().top
  //       ? ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(3).addClass("active"))
  //       : $(window).scrollTop() >= $("#pricing").offset().top &&
  //         $(window).scrollTop() < $("#guarantee").offset().top
  //       ? ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(4).addClass("active"))
  //       : $(window).scrollTop() >= $("#guarantee").offset().top &&
  //         $(window).scrollTop() < $("#form").offset().top
  //       ? ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(5).addClass("active"))
  //       : ($(".nav-item").each(function () {
  //           $(this).removeClass("active");
  //         }),
  //         $(".nav-item").eq(6).addClass("active"));
  //   }
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  // t(),
  // $(window).scroll(function () {
  //   t();
  // }),
  // $(".nav-link").click(function () {
  //   let t = $(this).attr("href");
  //   $("html, body").animate({ scrollTop: $(t).offset().top - 75 }, 100),
  //     $(".navbar-collapse").removeClass("show"),
  //     $(".animated-icon1").toggleClass("open");
  // })

  $(".top-header .left video").click(function () {
    const video = document.getElementById("top-video");
    if (video.muted) video.muted = false;
    else video.muted = true;
  });

  // $(".bottom-header .right video").click(function () {
  //   const video = document.getElementById("second-video");
  //   if (video.muted) {
  //     video.play();
  //     video.muted = false;
  //   } else {
  //     video.pause();
  //     video.muted = true;
  //   }
  // });

  // if (video.requestFullscreen) {
  //   video.requestFullscreen();
  // } else if (video.mozRequestFullScreen) {
  //   /* Firefox */
  //   video.mozRequestFullScreen();
  // } else if (video.webkitRequestFullscreen) {
  //   /* Chrome, Safari and Opera */
  //   video.webkitRequestFullscreen();
  // } else if (video.msRequestFullscreen) {
  //   /* IE/Edge */
  //   video.msRequestFullscreen();
  // }

  const swiper1 = new Swiper(".first-slider .swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: ".first-slider .swiper-button-next",
      prevEl: ".first-slider .swiper-button-prev",
    },
  });

  const swiper2 = new Swiper(".blogs .swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: ".blogs .swiper-pagination",
      clickable: true,
    },
  });

  const swiper3 = new Swiper(".teachers .swiper", {
    loop: true,
    autoplay: {
      delay: 250,
    },
    speed: 5000,
    spaceBetween: 5,
    pauseOnMouseEnter: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });

  const swiper4 = new Swiper(".step-one .swiper", {
    spaceBetween: 30,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".step-one .swiper-pagination",
      clickable: true,
    },
  });
  const swiper5 = new Swiper(".stories .swiper", {
    spaceBetween: 30,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".stories .swiper-pagination",
      clickable: true,
    },
  });

  const stories = document.querySelectorAll(".stories .story .description");
  stories.forEach((story) => {
    const h3Words = story.children[0].innerText.trim().split(" ");
    const h3TruncatedText = h3Words.slice(0, 8).join(" ");
    if (h3Words.length > 8) {
      story.children[0].innerText = h3TruncatedText + " ...";
    }
    const pWords = story.children[1].innerText.trim().split(" ");
    const pTruncatedText = pWords.slice(0, 18).join(" ");
    if (pWords.length > 18) {
      story.children[1].innerText = pTruncatedText + " ...\n";
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", "#");
      linkElement.textContent = "إقرأ المزيد";
      story.children[1].appendChild(linkElement);
    }
  });
});
