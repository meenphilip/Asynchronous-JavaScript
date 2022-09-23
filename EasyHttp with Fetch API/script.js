//create object
const http = new EasyHTTP();

//Get method
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//create user
// const user = {
//   name: "Meen",
//   username: "Tycoon",
//   email: "meen@yahoo.com",
//   phone: 123456789,
// };

//Post method
http
  .post("https://jsonplaceholder.typicode.com/users", user)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//create user
const user = {
  userId: 11,
  name: "Meen",
  username: "Tycoon",
  email: "meen@yahoo.com",
  phone: 123456789,
  website: "jkuat.com",
};

//Put method (update user)
http
  .put("https://jsonplaceholder.typicode.com/users/1", user)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//Delete method (delete user)

// create an id
const id = 9;
http
  .delete(`https://jsonplaceholder.typicode.com/users/${id}`, id)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
