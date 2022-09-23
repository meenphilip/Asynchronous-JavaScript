/**
 *EasyHTTp Library
 *Library for making HTTP requests
 *
 *@version 2.0.0
 *@author Philip Meen
 *
 **/

class EasyHTTP {
  // Make HTTP GET Requst
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make HTTP POST Requst
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make HTTP PUT Requst
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
