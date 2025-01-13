const toggleButton = document.getElementById("toggleButton");
const bodyElement = document.body;
const h1Element = document.querySelector("h1"); 
const pElements = document.querySelectorAll("p");
const articleElement = document.querySelector("article");
const footerElement = document.querySelector("footer");
const headerElement = document.querySelector("header"); 

// Check if there is any mode in localStorage
const userTheme = localStorage.getItem("theme");

if (userTheme === 'dark') {
    bodyElement.classList.add('darkmode');
    toggleButton.classList.add('darkmode');
    h1Element.classList.add('darkmode');
    pElements.forEach(p => p.classList.add('darkmode')); 
    articleElement.classList.add('darkmode');
    footerElement.classList.add('darkmode');
    headerElement.classList.add('darkmode'); // Apply darkmode to all <p> elements
} else {
    bodyElement.classList.remove('darkmode');
    toggleButton.classList.remove('darkmode');
    h1Element.classList.remove('darkmode');
    pElements.forEach(p => p.classList.remove('darkmode'));
    articleElement.classList.remove('darkmode');
    footerElement.classList.remove('darkmode');
    headerElement.classList.remove('darkmode');  // Remove darkmode from all <p> elements
}

// Toggle functionality
toggleButton.addEventListener('click', function () {
    bodyElement.classList.toggle('darkmode');
    toggleButton.classList.toggle('darkmode');
    h1Element.classList.toggle('darkmode');
    pElements.forEach(p => p.classList.toggle('darkmode')); 
    articleElement.classList.toggle('darkmode');
    footerElement.classList.toggle('darkmode');
    headerElement.classList.toggle('darkmode'); // Toggle darkmode on all <p> elements

    // Save the current theme to localStorage
    if (bodyElement.classList.contains('darkmode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
