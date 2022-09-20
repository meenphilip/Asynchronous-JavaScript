btnEl = document.getElementById("btn");

btnEl.addEventListener("click", loadData);

function loadData() {
  //create xhr objext
  const xhr = new XMLHttpRequest();

  //call open() -> take http method and url

  xhr.open("GET", "data.txt", true);

  console.log("READSTATE", xhr.readyState);

  // call onload()
  xhr.onload = function () {
    // check READSTATE
    console.log("READSTATE", xhr.readyState);
    //check status
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  //call send()
  xhr.send();

  // readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}
