// Dropdown (Mobile)
function dropdown() {
    menuHeader = document.getElementById("menuHeader")
    buttonMenu = document.getElementById('buttonMenu')
    if (menuHeader.classList.contains("show")) {
        buttonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
    } else {
        buttonMenu.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>'
    }

    menuHeader.classList.toggle("show");
}