const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let score = 0;
let pipePositionScore = pipe.OffsetLeft;

const jump = (event) => {
  console.log(event);
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === " " ||
    event.type === "click"
  ) {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
};

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const recomecar = document.getElementById("recomecar");
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "43px";

    recomecar.removeAttribute("hidden");

    clearInterval(loop);
  } else if (pipePosition > pipePositionScore) {
    score += 10;
    document.getElementById("pontuacao").innerHTML = score;
  }
  pipePositionScore = pipePosition;
}, 10);
