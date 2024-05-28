/* Author: 

*/

let accordion_up = document.querySelector(".accordion-up");
let accordion_down = document.querySelector(".accordion-down");
let li = document.querySelector("li");
let ul = document.querySelector("ul");

ul.children[0].classList.toggle("first");

let button = document.querySelectorAll(".plus");
button.forEach((val, index) => {
  button[index].addEventListener("click", (e) => {
    let a = e.target.parentElement.parentElement.children[1];
    let b = e.target.parentElement.parentElement;
    if (b.className === "first") {
      b.classList.toggle("first");
      if (button[index].parentElement.parentElement.className != "first") {
        button[0].parentElement.parentElement.classList.toggle("first");
      }
    } else {
      b.classList.toggle("first");
      for (let i = 0; i < button.length; i++) {
        if (index == i) {
          continue;
        }

        if (button[i].parentElement.parentElement.className == "first") {
          button[i].parentElement.parentElement.removeAttribute("class");
        }
      }
    }
  });
});
