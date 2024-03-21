const clickBtn = document.querySelector(".clickme");
const hiddenDiv = document.querySelectorAll(".hidden");

clickBtn.addEventListener("click", () => {
  hiddenDiv.forEach((item) => {
    item.classList.toggle("showing");
  });
});
