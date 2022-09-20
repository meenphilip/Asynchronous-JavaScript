btnEl = document.getElementById("btn");
ouputEl = document.getElementById("output");

btnEl.addEventListener("click", loadData);

function loadData() {
  //create xhr objext
  const xhr = new XMLHttpRequest();

  //call open() -> take http method and url

  xhr.open("GET", "data.txt", true);

  console.log("READYSTATE:", xhr.readyState);

  // optional -> used for spinners or loaders
  xhr.onprogress = function () {
    console.log("onprogress READYSTATE:", xhr.readyState);
  };

  // call onload()
  xhr.onload = function () {
    // check READSTATE
    console.log("READYSTATE:", xhr.readyState);
    //check status
    if (this.status === 200) {
      console.log(this.responseText);
      ouputEl.innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Error Handling
  xhr.onerror = function () {
    console.log("request rerror...");
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
