// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the theme toggle button and the body element
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check if the user previously saved a theme preference in their browser
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        bodyElement.classList.add('dark-mode');
    }

    // Add a click event listener to the button
    themeToggleButton.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        bodyElement.classList.toggle('dark-mode');

        // Save the user's preference to local storage
        if (bodyElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
