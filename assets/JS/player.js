document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const buttons = document.querySelectorAll(".playlist button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const src = button.dataset.src;
      audio.src = src;
      audio.play();
    });
  });
});
