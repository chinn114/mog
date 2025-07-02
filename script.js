document.getElementById("start-button").addEventListener("click", function () {
  const welcome = document.getElementById("welcome-screen");
  const main = document.getElementById("main-content");

  // 淡出欢迎页
  welcome.classList.add("hidden");

  // 渐入主内容
  setTimeout(() => {
    main.classList.remove("hidden");
    main.classList.add("show");
  }, 300); // 等待欢迎页淡出之后再渐入
});