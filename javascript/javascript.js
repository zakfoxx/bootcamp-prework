document.getElementById("grow").addEventListener("click", function () {
  document.getElementById("box").style.height = "250px";
});

document.getElementById("blue").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("fade").addEventListener("click", function () {
  document.getElementById("box").style.opacity = "50%";
});

document.getElementById("red").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "red";
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.backgroundColor = "orange";
  document.getElementById("box").style.opacity = "100%";
});
