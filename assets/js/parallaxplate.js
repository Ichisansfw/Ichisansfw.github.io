(function () {
    const parallaxPlate = document.querySelector(".background-plate");
    const detectMovement = document.querySelector("body");
    detectMovement.addEventListener("mousemove", (e) => {
      const x = e.pageX / detectMovement.offsetWidth;
      const y = e.pageY / detectMovement.offsetHeight;
      parallaxPlate.style.transform = `translate(-${x * 100}px, -${
        y * 35
      }px)`;
    });
  })();