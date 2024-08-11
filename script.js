let tabLink = document.querySelectorAll(".tab_btn");
let tabContent = document.querySelectorAll(".content");

tabContent[0].style.display = "block";

for (i = 0; i < tabLink.length; i++) {
  tabLink[i].addEventListener("click", function () {
    let index = Array.prototype.indexOf.call(tabLink, this);
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].classList.remove("active");
      tabContent[i].style.display = "none";
    }

    this.classList.add("active");
    tabContent[index].style.display = "block";
  });
}
