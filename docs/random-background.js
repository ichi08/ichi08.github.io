const backgroundImages = [
  "./picture/gemini1.jpeg",
  "./picture/gemini2.jpeg",
  "./picture/gemini3.jpeg",
  "./picture/gemini4.jpeg",
  "./picture/gemini5.jpeg",
  "./picture/gemini6.jpeg",
];

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedImage = backgroundImages[randomIndex];

  const style = document.createElement("style");
  style.textContent = `
    body::before {
      background-image: url("${selectedImage}");
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", setRandomBackground);
