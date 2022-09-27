const btn = document.querySelector('#searchBtn');
const search = document.querySelector('#searchContainer');
const input = document.querySelector('#searchBar');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})