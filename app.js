const cube = document.getElementById('cube');
const rangeInput = document.getElementById('rangeInput');

rangeInput.addEventListener('input', () => {
  const value = rangeInput.value;
  cube.style.transform = `rotateX(${value}deg) rotateY(${value}deg) rotateZ(${value}deg)`;
});
