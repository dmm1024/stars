const btn = document.querySelector('.start');

//  array colors
const colors = ['red', 'blue', 'green'];

function createStar(count = 10) {
  for(let i = 0; i < count; i++) {
    let size = Math.floor(Math.random() * 50);
    let posX = Math.floor(Math.random() * document.documentElement.clientWidth);
    let posY = Math.floor(Math.random() * document.documentElement.clientHeight);
    let color = colors[Math.floor(Math.random() * colors.length)];
    let side = Math.round(Math.random());

    let star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${posY}px`;
    star.style.left = `${posX}px`;
    star.style.background = `${color}`;
    document.body.appendChild(star);

    let sideInterval = setInterval(() => {
      side++;
    }, 500);

    let interval = setInterval(() => {
      // let count = 0;
      // count++;

      if(posY > 0) {
        posY--;
        star.style.top = `${posY}px`;

        if(side % 2 === 0) {
          posX--;
          star.style.left = `${posX}px`;
        }
        else {
          posX++;
          star.style.left = `${posX}px`;
        }
      }
      else {
        clearInterval(interval);
        document.body.removeChild(star);
      }
    }, 10);
  }
}

btn.addEventListener('click', () => {
  createStar();
})
