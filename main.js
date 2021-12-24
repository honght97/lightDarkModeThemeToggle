const $ = document.querySelector.bind(document);
const btn = $('#btn');
btn.addEventListener('click', (e) => {
    if(btn.checked == true) {
        document.body.setAttribute('data-theme', 'dark');
    }else {
        document.body.setAttribute('data-theme', '');
    }
});