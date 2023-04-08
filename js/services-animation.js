// const services = document.querySelector("#services");

// /* Window Scrolling */
// window.addEventListener("scroll", function () {
//   if (isInViewport(services)) {
//     services.classList.add("animate__animated");
//   }
// });

// /* If Item is in Viewport */
// function isInViewport(item) {
//   var bounding = item.getBoundingClientRect(),
//     myElementHeight = item.offsetHeight,
//     myElementWidth = item.offsetWidth;

//   if (
//     bounding.top >= -myElementHeight &&
//     bounding.left >= -myElementWidth &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth) +
//         myElementWidth &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) +
//         myElementHeight
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }


var elements;
var windowHeight;

function init() {
  elements = document.querySelectorAll('.tba');
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;
    
    var val = positionFromTop - windowHeight
    if (val > -1200 && val < 0){
      element.classList.add('animate__animated');
      console.log(element)
      console.log(positionFromTop - windowHeight)
    }
    else element.classList.remove('animate__animated');
  }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();