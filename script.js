const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
const container = document.querySelector(".container");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      jokeEl.innerHTML = data.value;

      updateContainerHeight();
    }
  };

  xhr.send();
};

jokeBtn.addEventListener("click", generateJoke);

const updateContainerHeight = () => {
  const jokeHeight = jokeEl.clientHeight;
  container.style.height = `${jokeHeight + 200}px`;
};
