const btn = document.querySelector(".bars");
    let dropdown = document.getElementById("ddd");
    let barI = document.getElementById("icon");
    btn.onclick = function() {
    dropdown.style.height = 'calc(100% + 12px)';
    barI.className = "fa-solid fa-xmark";
    }

    let barX = document.getElementsByClassName("fa-solid fa-xmark");

function barx() {
        dropdown.style.display = 'none';
        barI.className = "fa-solid fa-bars";
    }




function toggle() {
    const toggle = document.querySelector('.toggle');
    const banner = document.querySelector('.banner');
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
}