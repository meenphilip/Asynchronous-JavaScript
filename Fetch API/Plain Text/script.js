const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

btnEl.addEventListener("click", fetchData);

function fetchData() {
  // call fetch
  fetch("text.txt")
    .then((response) => response.text())
    .then((data) => {
      outputEl.textContent = data;
    });
}
