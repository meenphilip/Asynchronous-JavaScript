const btnEl = document.querySelector(".get-jokes");
const inputEl = document.getElementById("number");
const jokeListEl = document.querySelector(".jokes");

// Event Listener
btnEl.addEventListener("click", getJokes);

function getJokes(e) {
  //get input value
  const number = inputEl.value;

  //create xhr obj
  xhr = new XMLHttpRequest();

  // call open method
  xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);

  //call onload method
  xhr.onload = function () {
    //check for 200 status
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      jokes = [];
      jokes.push(response.value);

      console.log(jokes);

      let output = `
      <li class="list-group-item">${response.value}</li>
      `;

      jokeListEl.innerHTML = output;
    }
  };

  //call send method
  xhr.send();

  e.preventDefault();
}
