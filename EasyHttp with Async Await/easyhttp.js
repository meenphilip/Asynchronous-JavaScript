class EasyHTTP {
  //GET REQUEST
  async get(url) {
    //Only proceeds once the promise is resolved
    const res = await fetch(url);
    // Only proceed once the second promise is resolved
    const data = await res.json();
    // a promise is return
    return data;
  }

  //GET REQUEST (get single user)
  async get(url, id) {
    const res = await fetch(url, id);
    const data = await res.json();
    return data;
  }

  // POST REQUEST
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // PUT REQUEST
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = response.json();
    return resData;
  }

  // DELETE REQUEST
  async delete(url, id) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await response.json();
    return resData;
  }
}
