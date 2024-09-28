const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const joke = document.getElementById("Jokes");
const btn = document.getElementById("btn");

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            // Check if the joke is a single-part or two-part joke
            if (item.type === "single") {
                joke.textContent = item.joke; // Single-part joke
            } else {
                joke.textContent = `${item.setup} - ${item.delivery}`; // Two-part joke
            }
        })
        .catch(err => {
            joke.textContent = "Oops! Something went wrong."; // Error handling
            console.error(err); // Log the error for debugging
        });
}

btn.addEventListener("click", getJoke);
getJoke();
