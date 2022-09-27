const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const circle = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');
let progress = 1;

btnPrev.addEventListener('click', () => {
    circle[progress - 1].classList.remove("active");
    progressBar.style.width = `calc(100%/3* (${progress} - 2))`;
    progress--;
    if (progress === 1) btnPrev.disabled = true;
    btnNext.disabled = false;
})

btnNext.addEventListener('click', () => {
    progress++;
    circle[progress - 1].classList.add("active");
    progressBar.style.width = `calc(100%/3* (${progress} - 1))`;
    if (progress === circle.length) btnNext.disabled = true;
    btnPrev.disabled = false;
})


