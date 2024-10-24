document.querySelectorAll(".playsound-button").forEach((e) => {
  const audioclick = new Audio("assets/se/beep_1.mp3");
  const audiohover = new Audio("assets/se/beep_1.mp3");
  let isinside = false;
  e.addEventListener("mouseenter", (_) => {
    if (!isinside) {
      audioclick.currentTime = 0;
      audioclick.play();
    }
    isinside = true;
  });
  e.addEventListener("mouseleave", (_) => {
    isinside = false;
  });
});
