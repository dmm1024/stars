const btn = document.querySelector('.start');

//  array colors
const colors = ['233,53,120', '0,0,0'];

function createStar(count = 10, maxSize = 50) {
  for(let i = 0; i < count; i++) {
    let size = Math.floor(Math.random() * maxSize);
    let posX = Math.floor(Math.random() * document.documentElement.clientWidth);
    let posY = Math.floor(Math.random() * (document.documentElement.clientHeight - 300)) + 300;
    let color = colors[Math.floor(Math.random() * colors.length)];
    let side = Math.round(Math.random());

    let star = document.createElement('div');
    star.innerHTML = `<svg width='100%' height='100%' viewBox="0 0 200 200">
    <polyline points="100,10 40,198 190,78 10,78 160,198" stroke-width="1" class="star-svg"/>
  </svg>`;
    star.classList.add('star');
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${posY}px`;
    star.style.left = `${posX}px`;
    star.style.fill = `rgba(${color})`;
    if(size < maxSize * .3) {
      star.style.opacity = '.25';
    }
    else if(size > maxSize * .7) {
      star.style.opacity = '1';
    }
    else {
      star.style.opacity = '.5';
    }
    document.body.appendChild(star);

    let sideInterval = setInterval(() => {
      side++;
    }, 500);


    let xInterval = setInterval(() => {
      if(side % 2 === 0) {
        posX--;
        star.style.left = `${posX}px`;
      }
      else {
        posX++;
        star.style.left = `${posX}px`;
      }
    }, 50);

    let interval = setInterval(() => {
      if(posY > 0) {
        posY--;
        star.style.top = `${posY}px`;
      }
      else {
        clearInterval(interval);
        document.body.removeChild(star);
      }
    }, 5);
  }
}

btn.addEventListener('click', () => {
  createStar(30, 100);
})
