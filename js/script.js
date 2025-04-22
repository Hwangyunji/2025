// 0.5초 후에 글자를 나타나게 하고 밑줄 애니메이션 적용
window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    document.querySelector('.yunji').classList.add('show');
    document.querySelector('.portfolio').classList.add('show');
  }, 500); // 0.5초 후에 글자가 나타나게
});
