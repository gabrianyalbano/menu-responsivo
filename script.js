const btnMobile = document.getElementById('btn-mobile');

function toggleMenu (event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const themeSwitch = document.getElementById('toggle-theme');
const body = document.body;

// Carrega tema salvo
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeSwitch.checked = true;
}

// Toggle do tema
themeSwitch.addEventListener('change', () => {
  const isDark = themeSwitch.checked;
  body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Toggle modo escuro
const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark');
});