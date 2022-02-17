
// Custom JS script
const SCROLL_FROM_TOP = 200;    // Defines when button to top will appear

myButton = document.getElementById("btnToTop");

// Show button when user scroll down
window.onscroll = function () {
    displayButtonToTop();
}

// Set style of button based on scroll amount
function displayButtonToTop() {
    if (document.body.scrollTop > SCROLL_FROM_TOP || document.documentElement.scrollTop > SCROLL_FROM_TOP) { /* Handle safair case and others */
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// Take to top on button click
function scrollToTop() {
    document.body.scrollTop = 0;                // for Safari
    document.documentElement.scrollTop = 0;     // for Chrome, Firefox, IE and Opera
}