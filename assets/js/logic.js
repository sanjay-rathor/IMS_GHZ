 // form js start

 // Open form
 document.querySelectorAll(".topenq").forEach(function(element) {
     element.addEventListener("click", function() {
         const formSec = document.querySelector(".form-sec");

         formSec.classList.remove("slide-righta");
         formSec.classList.remove("hides");

         window.scrollTo(0, 0);
     });
 });


 // Close form
 function closeBox() {
     const formSec = document.querySelector(".form-sec");

     if (formSec) {
         formSec.classList.add("slide-righta");
     }
 }


 // Handle window resize
 window.addEventListener("resize", function() {
     const formSec = document.querySelector(".form-sec");

     if (window.innerHeight < 767 && formSec) {
         formSec.classList.remove("slide-righta");
     }
 });


 // Scroll to #home
 document.querySelectorAll(".topenq1 a").forEach(function(element) {
     element.addEventListener("click", function(e) {
         e.preventDefault();

         const homeSection = document.querySelector("#home");

         if (homeSection) {
             const topPosition =
                 homeSection.getBoundingClientRect().top +
                 window.pageYOffset -
                 85;

             window.scrollTo({
                 top: topPosition,
                 behavior: "smooth"
             });
         }
     });
 });


 // Hide form on scroll for desktop
 if (window.innerWidth > 768) {
     window.addEventListener("scroll", function() {
         const formSec = document.querySelector(".form-sec");

         if (!formSec) return;

         if (window.pageYOffset > 300) {
             formSec.classList.add("hides");
         } else {
             formSec.classList.remove("hides");
         }
     });
 }

 // form js end



 //  learn section js start
 const sliderNav = new Swiper(".rightSlider", {
     slidesPerView: 1,
     slidesPerGroup: 1,
     spaceBetween: 20,
     effect: "fade",
     fadeEffect: {
         crossFade: true,
     },
     loop: true,
     // centeredSlides: true,
     // autoplay: {
     //     delay: 1500,
     //     disableOnInteraction: false,
     //     pauseOnMouseEnter: true,
     // },


 });

 // Main slider
 const sliderFor = new Swiper(" .lftSlider", {
     slidesPerView: 4,
     slidesPerGroup: 1,
     slideToClickedSlide: true,
     watchSlidesProgress: true,
     //  grabCursor: true,

     spaceBetween: 20,
     loop: true,
     pagination: {
         el: '.swiper-pagination',
         clickable: true
     },
     breakpoints: {
         1024: { slidesPerView: 4 },
         768: { slidesPerView: 4, },
         320: { slidesPerView: 4, spaceBetween: 5 },
     },
     //  autoplay: {
     //      delay: 1500,
     //      disableOnInteraction: false,
     //      pauseOnMouseEnter: true,
     //  },

     thumbs: {
         swiper: sliderNav,
     },

     allowTouchMove: true,
 });
 //  learn section js end


  var swiper3 = new Swiper(".highSwiper2", {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        // autoHeight: true,
        speed: 1000,

     
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".swiper-pagination",
              clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },

        breakpoints: {
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 5, spaceBetween: 5 },
            320: { slidesPerView: 3, spaceBetween: 5, },
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
    
   var swiper6 = new Swiper(".edgeSlider", {

    centeredSlides: true,
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next22",
      prevEl: ".swiper-button-prev22",
     },

    breakpoints: {

        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 0,
        }
    }
});




var swiper = new Swiper('.imsSwiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },

        576: {
            slidesPerView: 1.5,
        },
         1024: {
            slidesPerView: 1.5,
        },
        1200: {
            slidesPerView: 1.5,
        }
    },
});


var swiper = new Swiper('.degSwiper', {
    slidesPerView: 5,
    spaceBetween: 0,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 3,
        },

        576: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 5,
        }
    }
});





