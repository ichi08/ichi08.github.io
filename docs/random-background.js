const backgroundImages = [
  "./picture/gemini1.jpeg",
  "./picture/gemini2.jpeg",
  "./picture/gemini3.jpeg",
  "./picture/gemini4.jpeg",
  "./picture/gemini5.jpeg",
  "./picture/gemini6.jpeg",
];

// 出現確率（合計は1になるように設定）
const probabilities = [0.19, 0.19, 0.19, 0.19, 0.19, 0.05]; // 各画像の確率

function setRandomBackground() {
  const randomValue = Math.random();
  let cumulativeProbability = 0;

  for (let i = 0; i < probabilities.length; i++) {
    cumulativeProbability += probabilities[i];
    if (randomValue <= cumulativeProbability) {
      const selectedImage = backgroundImages[i];

      const style = document.createElement("style");
      style.textContent = `
        body::before {
          background-image: url("${selectedImage}");
        }
      `;
      document.head.appendChild(style);
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", setRandomBackground);
