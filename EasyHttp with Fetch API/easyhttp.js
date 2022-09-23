/**
 *EasyHTTp Library
 *Library for making HTTP requests
 *
 *@version 2.0.0
 *@author Philip Meen
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Requst
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
