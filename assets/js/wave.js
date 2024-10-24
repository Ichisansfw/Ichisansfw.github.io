document.querySelectorAll(".shaky").forEach((sh) => {
    const text = sh.textContent;
    sh.innerText = "";
    for (const char in text) {
      const span = document.createElement("span");
      span.style.animationDelay = char / 15 + "s";
      span.innerText = text[char];
      sh.appendChild(span);
    }
  });