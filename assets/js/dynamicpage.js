const memek = document.querySelectorAll(".navigation-wrapper button.nav-item");
memek.forEach((el) => {
  el.addEventListener("click", () => {
    memek.forEach((eel) => {
      eel.classList.remove("selected");
    });
    document.querySelectorAll(".content-invisible").forEach((el) => {
      el.style.display = "none";
    });
    el.classList.add("selected");
    document.querySelector(
      `.content-invisible[data-page="${el.getAttribute("data-target")}"]`
    ).style.display = "block";
  });
});
