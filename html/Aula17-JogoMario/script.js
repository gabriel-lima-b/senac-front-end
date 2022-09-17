const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = (event) => {
  console.log(event);
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === " "
  ) {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
};

document.addEventListener("keydown", jump);

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
  }
}, 10);

let pontuacao = 0;

function addPontos() {
  pontuacao += 5;
  document.getElementById("pontuacao").innerHTML = pontuacao;
}

const loop2 = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  if (pipePosition < 10 && pipePosition > 0) {
    addPontos();
  }
}, 10);
