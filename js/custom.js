// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links ul");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};

///////////////////////////////////////////////

// // Get references to the necessary elements
// const testimonialsContainer = document.querySelector(".testimonials ");
// const boxElements = document.querySelectorAll(".testimonials .box");
// const spanElements = document.querySelectorAll(".testimonials .span span");
// const leftArrow = document.querySelector(".testimonials .fa-arrow-left");
// const rightArrow = document.querySelector(".testimonials .fa-arrow-right");

// // Initialize the active box index
// let activeBoxIndex = 0;

// // Add event listener to the right arrow
// rightArrow.addEventListener("click", () => {
//   if (activeBoxIndex < boxElements.length - 1) {
//     activeBoxIndex++;
//     moveBoxes();
//   }
// });

// // Add event listener to the left arrow
// leftArrow.addEventListener("click", () => {
//   if (activeBoxIndex > 0) {
//     activeBoxIndex--;
//     moveBoxes();
//   }
// });

// // Add event listeners to the span elements
// spanElements.forEach((span, index) => {
//   span.addEventListener("click", () => {
//     activeBoxIndex = index;
//     moveBoxes();
//   });
// });

// // Function to move the boxes based on the active box index
// function moveBoxes() {
//   // Remove the 'active' class from all boxes and span elements
//   boxElements.forEach((box) => box.classList.remove("actives"));
//   spanElements.forEach((span) => span.classList.remove("activ"));

//   // Add the 'active' class to the current active box and span
//   boxElements[activeBoxIndex].classList.add("actives");
//   spanElements[activeBoxIndex].classList.add("activ");
// }

// // Initialize the testimonials slider
// function initTestimonialsSlider() {
//   // Add the 'active' class to the first box and span
//   boxElements[activeBoxIndex].classList.add("actives");
//   spanElements[activeBoxIndex].classList.add("activ");
// }

// Call the initialization function
// initTestimonialsSlider();

//*/****//////////////// */

let minus = document.querySelectorAll(".cart .minus");
let plus = document.querySelectorAll(".cart .plus");
let input = document.querySelectorAll(".cart .input");
let total = document.querySelectorAll(".cart .total");
let close = document.querySelectorAll(".box i");

for (let i = 0; i < minus.length; i++) {
  let num = 1;

  minus[i].onclick = function () {
    if (num > 0) {
      num--;
      input[i].value = num;
      total[i].innerHTML = `$ ${49.0 * num}`;
    }
  };

  plus[i].onclick = function () {
    num++;
    input[i].value = num;
    total[i].innerHTML = `$ ${49.0 * num}`;
  };

  close[i].onclick = function (e) {
    console.log(e.target.parentNode);
    e.target.parentNode.remove();
  };
}
