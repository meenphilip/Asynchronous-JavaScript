function easyHTTP() {
  //create obj
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Requst
easyHTTP.prototype.get = function (url, callback) {
  //XMLHttpRequest open()
  this.http.open("GET", url, true);

  ////XMLHttpRequest onload()
  const SELF = this;
  this.http.onload = function () {
    if (SELF.http.status === 200) {
      callback(null, SELF.http.responseText);
    } else {
      callback("Error: " + SELF.http.status);
    }
  };

  //XMLHttpRequest open()
  this.http.send();
};

// Make an HTTP POST Requst

// Make an HTTP PUT Requst

// Make an HTTP DELETE Requst
