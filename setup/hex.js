const hex = ["green", "red", "blue", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const randomNumber = 1;
  document.body.style.backgroundColor = hex[randomNumber];
  color.textContent = hex[randomNumber];
})
