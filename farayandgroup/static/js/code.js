document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems);
});

let btn = document.getElementById("jumpToTop");
btn.style.visibility = "hidden";


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
     
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.visibility = "visible";
  } else {
    btn.style.visibility = "hidden";
  }
}

document.addEventListener("DOMContentLoaded", () => {
       fadin('.fade', { delay: 200 })
     });
     