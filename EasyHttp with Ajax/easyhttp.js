function easyHTTP() {
  //create obj
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Requst
easyHTTP.prototype.get = function (url, callback) {
  //XMLHttpRequest open()
  this.http.open("GET", url, true);

  //XMLHttpRequest onload()
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
easyHTTP.prototype.post = function (url, data, callback) {
  //XMLHttpRequest open()
  this.http.open("POST", url, true);

  // set header
  this.http.setRequestHeader("Content-Type", "application/json");

  //XMLHttpRequest onload()
  const SELF = this;
  this.http.onload = function () {
    callback(null, SELF.http.responseText);
  };

  //XMLHttpRequest send()
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Requst
easyHTTP.prototype.put = function (url, data, callback) {
  //XMLHttpRequest open()
  this.http.open("PUT", url, true);

  // set header
  this.http.setRequestHeader("Content-Type", "application/json");

  //XMLHttpRequest onload()
  const SELF = this;
  this.http.onload = function () {
    callback(null, SELF.http.responseText);
  };

  //XMLHttpRequest send()
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Requst
easyHTTP.prototype.delete = function (url, callback) {
  //XMLHttpRequest open()
  this.http.open("DELETE", url, true);

  //XMLHttpRequest onload()
  const SELF = this;
  this.http.onload = function () {
    if (SELF.http.status === 200) {
      callback(null, "post deleted");
    } else {
      callback("Error: " + SELF.http.status);
    }
  };

  //XMLHttpRequest open()
  this.http.send();
};
