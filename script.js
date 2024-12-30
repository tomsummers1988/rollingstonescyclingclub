// script.js
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you'd typically send the username and password to a server-side script for authentication.
    // For a simple example, you could just log the values to the console:
    console.log('Username:', username);
    console.log('Password:', password);
});
