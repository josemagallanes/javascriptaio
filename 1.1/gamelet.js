const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let hPosition = 0; // horizontal position
let vPosition = 0; // vertical position
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    hPosition = hPosition - 30;
  }
  if (e.code === "ArrowRight") {
    hPosition = hPosition + 30;
  }
  if (e.code === "ArrowDown") {
    vPosition = vPosition + 30;
  }
  if (e.code === "ArrowUp") {
    vPosition = vPosition - 30;
  }
  if (hPosition < 0) {
    hPosition = 0;
  }
  if (vPosition < 0) {
    vPosition = 0;
  }

  refresh();
}

function refresh() {
  ball.style.left = hPosition + "px";
  ball.style.top = vPosition + "px";
}
