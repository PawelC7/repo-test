(() => {
    const button = document.querySelector(".js-main-navigation__mobile-button");
    const menu = document.querySelector(".js-main-navigation__menu");

    const toogleClass = () => {
        menu.classList.toggle("main-navigation__menu--open");
    };

    button.addEventListener("click", toogleClass);
    menu.addEventListener("click", toogleClass);
})();