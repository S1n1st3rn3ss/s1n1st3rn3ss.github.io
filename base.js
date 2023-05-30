function menuBar() {
    if (menu.className === "menu-bar") {
        menu.className += " responsive";
    } else {
        menu.className = "menu-bar";
    }
}
var menu = document.getElementById("my-menu-bar");
menu.addEventListener("click", menuBar);
