window.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const text = nameElement.textContent;
    nameElement.textContent = ""; // 초기화
  
    nameElement.classList.add("typing");
  
    // 한 글자씩 span으로 감싸고 딜레이 줌
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.animationDelay = `${i * 0.1}s`;
      nameElement.appendChild(span);
    }
  
    // portfolio는 이제 바로 보이므로 JS에서 제어할 필요 없음!
  });

  document.querySelectorAll(".donut-bar").forEach((bar, idx) => {
    const percent = 80; // 바꾸고 싶은 퍼센트로 설정
    bar.setAttribute("stroke-dasharray", `${percent} 100`);
  });
