const mario = document.querySelector(".mario");

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
document.addEventListener("click", jump);
