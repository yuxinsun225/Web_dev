const img = document.querySelectorAll('.panel');
let imgActive = img[0];

for (let el of img) {
    el.addEventListener('click', () => {
        imgActive.classList.remove('active');
        el.classList.add('active');
        imgActive = el;
    })
}