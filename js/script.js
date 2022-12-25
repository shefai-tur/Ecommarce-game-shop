$(document).ready(function(){
  $(".modal").addClass('popup');
});
$(".btn-close").click(function(){
  $(".modal").removeClass('popup');
})
// modal text end

$(window).scroll(function(){
let scrolling = $(this).scrollTop();
if( scrolling > 40){
  $(".my-navID").addClass("nav-anim");
}
else{
  $(".my-navID").removeClass("nav-anim");
}
});
//  navbar animation end

$('.slideshow').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : '.next',
    prevArrow : '.prev',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//   slick js end

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
// }
// }

// topup modal text js end