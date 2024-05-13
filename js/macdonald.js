window.onload = function () {
  // 모달창
  // // 방법 1
  // let body = this.document.querySelector("body");
  // let modal = this.document.querySelector(".modal-wrap");
  // modal.addEventListener("click", function () {
  //   modal.style.display = "none";
  //   fadeOut(modal);
  // });
  // ========================================================
  // let body = this.document.querySelector("body");
  // let modal = this.document.querySelector(".modal-wrap");
  // modal.addEventListener("click", function () {
  //   anime({
  //     targets: ".modal",
  //     delay: 200,
  //     duration: 100,
  //     opacity: 0,
  //     easing: "easeInOutQuad",
  //     complete: function () {
  //       modal.style.display = "none";
  //       body.classList.add("active");
  //     },
  //   });
  // });
  // ========================================================
  // 안내창 스크립트
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    fadeout(modal);
  });
  //isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });
  // ========================================================
  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // var menuToggleBtn = $(".menu-toggle-btn");
  // mainMenu = $(".toggle-menu-bar-list");
  // menuToggleBtn.click(function () {
  //   mainMenu.slideToggle();
  // });
};
$(document).ready(function () {
  var menuToggleBtn = $(".menu-toggle-btn");
  mainMenu = $(".toggle-menu-bar-list");
  menuToggleBtn.click(function () {
    mainMenu.slideToggle();
  });
});
