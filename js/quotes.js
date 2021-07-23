// Our array of various quotes and their authors. I chose to make them quotes from animes.
const quotes = [
    {
        quote: "People die when they are killed.",
        author: "Emiya Shirou"
    },
    {
        quote: "Never regret anything that made you smile.",
        author: "Mark Twain"
    },
    {
        quote: "Die with memories, not dreams.",
        author: "Unknown"
    },
    {
        quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
        author: "Kenshin Himura"
    },
    {
        quote: "Thinking you're no-good and worthless is the worst thing you can do.",
        author: "Doraemon"
    },
    {
        quote: "Don't give up, there's no shame in falling down! True shame is to not stand up again!",
        author: "Shintaro Midorima"
    },
    {
        quote: "New experiences are what make life worth living.",
        author: "Leticia Draculea"
    },
    {
        quote: "Don’t live your life making up excuses. The one making your choices is yourself.",
        author: "Mugen"
    },
    {
        quote: "Life is like a pencil that will surely run out, but will leave the beautiful writing of life.",
        author: "Nami"
    },
    {
        quote: "The world’s not perfect, but it’s there for us trying the best it can. That’s what makes it so damn beautiful.",
        author: "Roy Mustang"
    }
];

// Creates variables for the necessary HTML components we are converting to Javascript.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Use the floor function to find a random integer that we use to choose a random quote
// from our array of different quotes.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;