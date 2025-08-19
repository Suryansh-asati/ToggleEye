document.addEventListener("mousemove", function (e) {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".pupil");

    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;

    const angle = Math.atan2(dy, dx);
    const distance = Math.min(20, Math.hypot(dx, dy)); // max 20px move

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
});