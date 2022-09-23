const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let score = 0;
let pipePositionScore = pipe.OffsetLeft;
let gameAudio = new Audio("./sounds/game.mp3");

function comecar() {
  mario.src = "./imagens/mario.gif";
  pipe.style.animationPlayState = "running";
  document.getElementById("clouds").style.animationPlayState = "running";
  gameAudio.volume = 0.8;
  gameAudio.play();
  gameAudio.loop = true;

  document.getElementById("comecar").hidden = true;

  document.addEventListener("keydown", jump);
  document.addEventListener("click", jump);
}

const jump = (event) => {
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

    var jumpAudio = new Audio("./sounds/maro-jump-sound-effect_1.mp3");
    jumpAudio.volume = 0.06;
    if (document.getElementById("recomecar").hidden) {
      jumpAudio.play();
    }
  }
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const recomecar = document.getElementById("recomecar");
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    gameAudio.pause();
    var deathAudio = new Audio("./sounds./playerdown.mp3");
    deathAudio.volume = 0.8;
    deathAudio.play();
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "43px";

    recomecar.removeAttribute("hidden");
    document.getElementById("clouds").style.animationPlayState = "paused";
    clearInterval(loop);
  } else if (pipePosition > pipePositionScore) {
    score += 10;
    document.getElementById("pontuacao").innerHTML = score;

    if (score % 100 === 0) {
      let coinAudio = new Audio("./sounds/super-mario-coin-sound.mp3");
      coinAudio.volume = 0.4;
      coinAudio.play();
    }
  }
  pipePositionScore = pipePosition;
}, 10);
