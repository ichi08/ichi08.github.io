const backgroundImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_lx1m3llx1m3llx1m-lg6LuG7fPVfZgg7EBPlUHx1UAVNCof.jpeg",
  "https://source.unsplash.com/random/1920x1080/?data",
  "https://source.unsplash.com/random/1920x1080/?technology",
  "https://source.unsplash.com/random/1920x1080/?science",
]

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length)
  const selectedImage = backgroundImages[randomIndex]

  const style = document.createElement("style")
  style.textContent = `
    body::before {
      background-image: url("${selectedImage}");
    }
  `
  document.head.appendChild(style)
}

document.addEventListener("DOMContentLoaded", setRandomBackground)

