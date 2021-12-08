const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
/* h1 을 여러개 쓰는건 좋은 방식은 아니지만 예를 위해 */

for(let h1 of h1s){
    h1.addEventListener('click', colorize) 
}

function colorize() {
    console.log(this);
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}