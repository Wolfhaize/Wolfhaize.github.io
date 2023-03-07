'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });



// whishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {

  whishlistBtn[i].addEventListener("click", function () { elemToggleFunc(this); });

}



// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});


const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.getElementById("spin").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 50);
}


const progress = document.querySelector(".article-progress");
document.addEventListener("scroll", handleProgress);

function handleProgress() {
  const totalScroll = document.documentElement.offsetHeight;
  const scrolledPosition = document.documentElement.scrollTop;
  const finalScroll = totalScroll - window.innerHeight - 2;
  const scrollPercent = scrolledPosition / finalScroll;
  progress.style.transform = `scaleX(${scrollPercent})`;
}
