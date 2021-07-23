// Creates a variable from the HTML component we are converting to Javascript
// the clock function of our front end.
const clock = document.querySelector("h2#clock");

// Main function that will display the current time for the user in military time.
// PadStart is used to make it so that the time will be shown as the style of
// '00:00' instead of 0:00' or '0:0'.
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);