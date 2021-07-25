let block = document.querySelector('.block');
let x;
let y;
block.addEventListener('dragstart', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  console.log(x, y);
})

block.addEventListener('dragend', (e) => {
  console.log(e.pageX, e.pageY);
  e.target.style.left = (e.pageX - x) + 'px';
  e.target.style.top = (e.pageY - y) + 'px';
})


