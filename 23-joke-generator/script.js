const jokeText = document.getElementById('jokeText');
let button = document.getElementById('btn');
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"

const getJoke = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(data => data.json())
            .then(item => {
                jokeText.textContent = item.joke;
                resolve();
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
            });
    });
}

button.addEventListener('click', getJoke);



