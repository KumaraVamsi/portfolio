
AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile'
});


const themeSwitch = document.getElementById('theme-switch');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('light-mode', savedTheme === 'light');
    themeSwitch.checked = savedTheme === 'light';
}


themeSwitch.addEventListener('change', function() {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

