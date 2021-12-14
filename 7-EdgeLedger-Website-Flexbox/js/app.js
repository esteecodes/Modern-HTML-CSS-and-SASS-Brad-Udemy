// Smooth Scrolling 

/* BUG FIXED --- on original example .btn is included but it should NOT be included, 
because the blog page link (Read Our Blog) also gets affected by .preventDefault 
and the blog page doesn't open !!! */

// $('#navbar a, .btn').on('click', function (e) {
//   if (this.hash !== ""); {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate (
//       {
//         scrollTop: $(hash).offset().top - 70,
//       },
//       800
//     );
//   }
// });


// Smooth Scrolling FIXED 
// $('#navbar a').on('click', function (e) {
//   if (this.hash !== ""); {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate (
//       {
//         scrollTop: $(hash).offset().top - 70,
//       },
//       800
//     );
//   }
// });

const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function(){
  if (window.pageYOffset > 100){
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    } 
    setTimeout(function() {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
      navbar.classList.add("top");
      scrolled = false;
  }
};