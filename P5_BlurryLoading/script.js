const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');
let i = 0;
let int = setInterval(blurring, 30);

function blurring() {
    text.innerText = `${i}%`;
    text.style.opacity = `${100 - i}%`;
    bg.style.filter = `blur(${100 - i}px)`;
    i++;
    console.log(int);
    if (i === 101) clearInterval(int);
}
