'use strict';

(function () {
    var switchNav = function(e) {
        const navBar = document.getElementById('standard-nav');
        const body = document.querySelector('body');
        const darkTheme = 'dark-theme';

        if (window.scrollY >= 250 && !body.classList.contains(darkTheme)) {
            body.classList.add(darkTheme);
            e.preventDefault();
        } else {
            navBar.classList.remove(darkTheme);
        }
    };

    window.addEventListener('scroll', switchNav);
}());
