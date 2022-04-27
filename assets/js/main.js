window.onscroll = function() {headSticky()};

var header = document.getElementById("navMenu");
var sticky = header.offsetTop;

function headSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}