const http = new EasyHTTP();
const id = 10;

// GET REQUEST
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// GET single user
http
  .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// create user
const user = {
  name: "Tito",
  username: "TT",
  email: "tito@gmail.com",
};

// POST REQUEST
http
  .post("https://jsonplaceholder.typicode.com/users", user)
  .then((data) => console.log("USER CREATED", data))
  .catch((err) => console.error(err));

// update user details
const updateUser = {
  name: "Tito Ukili",
  username: "TT",
  email: "tito@gmail.com",
  website: "mediaPrintLtd.org",
};

// PUT REQUEST
http
  .put(`https://jsonplaceholder.typicode.com/users/${id}`, updateUser)
  .then((data) => console.log("USER UPDATED", data))
  .catch((err) => console.error(err));

//DELETE REQUEST
http
  .delete(`https://jsonplaceholder.typicode.com/users/${id}`, id)
  .then(() => console.log(`Resouce with id ${id} DELETE`))
  .catch((err) => console.error(err));
