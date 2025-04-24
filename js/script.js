window.addEventListener("DOMContentLoaded", function () {
  // 타이핑 애니메이션
  const nameElement = document.getElementById("name");
  if (nameElement) {
    const text = nameElement.textContent;
    nameElement.textContent = "";
    nameElement.classList.add("typing");
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.animationDelay = `${i * 0.1}s`;
      nameElement.appendChild(span);
    }
  }

  const fadeImages = document.querySelectorAll('.fade-img');

const handleScroll = () => {
  fadeImages.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.9;

    if (rect.top < triggerPoint) {
      img.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);
  
});
