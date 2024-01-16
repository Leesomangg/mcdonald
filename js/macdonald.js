window.onload = function () {
// top 버튼 스크롤 기능
const topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(window.scrollY);
  if (window.scrollY == 0) {
    window.scrollTo({
      top: 9999,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
}