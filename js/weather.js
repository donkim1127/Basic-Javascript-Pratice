// Our unique API key for the open weather map API.
API_KEY = "afcb358aeab02962b80d58615ff06f40";

// If the user's given coordinates are valid then display the weather of the given coordinates.
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// If the user's given coordinates are invalid then alert them that the coordinates are invalid.
function onGeoError() {
    alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);