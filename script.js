//Constants
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// Dark or Light images
function imageMode(color) {
    image1.src = `img/undraw_feeling_proud_${color}.svg`;
    image2.src = `img/undraw_portfolio_website_${color}.svg`;
    image3.src = `img/undraw_maker_launch_${color}.svg`;
}

function toggleTheme(isDark) {
    nav.style.backgroundColor = isDark
        ? "rgb(0 0 0 / 50%)"
        : "rgb(255 255 255 / 50)";
    textBox.style.backgroundColor = isDark
        ? "rgb(255 255 255 / 50%)"
        : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = isDark ? "Light Mode" : "Dark Mode";
    isDark
        ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
        : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//     textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//     toggleIcon.children[0].textContent = "Dark Mode";
//     toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//     imageMode(DARK_THEME);
// }

// // Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
//     textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//     toggleIcon.children[0].textContent = "Light Mode";
//     toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//     imageMode(LIGHT_THEME);
// }

// Theme Switcher
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", DARK_THEME);
        toggleTheme(true);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", LIGHT_THEME);
        toggleTheme(false);
    }
}

//Check local Storage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleTheme(DARK_THEME);
    } else {
        toggleTheme(LIGHT_THEME);
    }
}

console.log(currentTheme);

//Event Listeners
toggleSwitch.addEventListener("change", switchTheme);
