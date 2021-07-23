// An array of three different images.
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

// Like the quotes, we use the floor function to choose a random image.
const chosenImage = images[Math.floor(Math.random() * images.length)];

// Displays our random image.
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);