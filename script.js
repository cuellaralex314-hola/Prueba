function saludar() {
    alert("¡Bienvenidos a mi página web!");
}

window.onload = function() {
    document.body.style.opacity = "1";
}

const elementos = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elementos.forEach(el => observer.observe(el));

function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggle = document.querySelector(".menu-toggle");

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        toggle.textContent = 'X';
    } else {
        toggle.textContent = '☰';
    }
}