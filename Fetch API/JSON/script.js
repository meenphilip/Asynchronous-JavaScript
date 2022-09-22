const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

const buttonEl = document.getElementById("button");
const displayEl = document.getElementById("display");

btnEl.addEventListener("click", fetchJsonData);
buttonEl.addEventListener("click", loadJsonData);

function fetchJsonData() {
  fetch("customer.json")
    .then((response) => response.json())
    .then((data) => {
      outputEl.innerHTML = `
        <li class="list-group-item list-group-item-dark">${data.id}</li>
        <li class="list-group-item list-group-item-danger">${data.name}</li>
        <li class="list-group-item list-group-item-warning">${data.company}</li>
        <li class="list-group-item list-group-item-secondary">${data.phone}</li>
    `;
    });
}

//fetch multiple records
function loadJsonData() {
  //fetch
  fetch("customers.json")
    .then((response) => response.json())
    .then((data) => {
      //data is an array of objects
      let output = "";

      //loop through them
      data.forEach((customer) => {
        output += `
          <li class="list-group-item list-group-item-info">${customer.id}</li>
          <li class="list-group-item">${customer.name}</li>
          <li class="list-group-item">${customer.company}</li>
          <li class="list-group-item">${customer.phone}</li>
    `;
      });
      // dispaly in DOM
      displayEl.innerHTML = output;
    });
}
