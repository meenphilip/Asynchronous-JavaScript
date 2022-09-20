const btnEl = document.getElementById("btn");
const buttonEL = document.getElementById("button");
const customerEl = document.getElementById("customer");
const customersEl = document.getElementById("customers");

// Add Event Listner
btnEl.addEventListener("click", loadCustomer);

function loadCustomer() {
  // create xhr obj
  const xhr = new XMLHttpRequest();
  // call open
  xhr.open("GET", "customer.json", true);

  //call onload
  xhr.onload = function () {
    //check status === 200
    if (this.status === 200) {
      // parse as an Object
      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      customerEl.innerHTML = output;
    }
  };

  // error Handling
  xhr.onerror = function () {
    console.log("Error");
  };
  //call send
  xhr.send();
}
