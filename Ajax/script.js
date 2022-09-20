btnEl = document.getElementById("btn");

btnEl.addEventListener("click", loadData);

function loadData() {
  //create xhr objext
  const xhr = new XMLHttpRequest();

  //call open() -> take http method and url

  xhr.open("GET", "data.txt", true);

  // call onload()
  xhr.onload = function () {
    //check status
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  //call send()
  xhr.send();
}
