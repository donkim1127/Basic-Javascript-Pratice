/**
 * This file has the Javascript code that shows the username onto the front end once
 * the user has inputted their username through the input box.
 */

// The variables that fetch the parts of the HTML code that we need to 
// convert to Javascript.
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// Variables created to avoid discrepancies in typing the same strings,
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Our main function for showing the greeting to the user on the front end.
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// Helper function that displays the inputted username onto our front end.
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// Handles the case if the user tries to submit a null username.
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}