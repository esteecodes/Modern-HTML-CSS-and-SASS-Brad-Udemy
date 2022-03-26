// Smooth Scrolling 

/* BUG FIXED --- on original example .btn is included but it should NOT be included, 
because the blog page link (Read Our Blog) also gets affected by .preventDefault 
and the blog page doesn't open !!! @esteecodes */

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
$('#navbar a').on('click', function (e) {
  if (this.hash !== ""); {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate (
      {
        scrollTop: $(hash).offset().top - 70,
      },
      800
    );
  }
});