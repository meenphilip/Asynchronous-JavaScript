//create object
const http = new EasyHTTP();

// //Get method
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//create user
const user = {
  name: "Meen",
  username: "Tycoon",
  email: "meen@yahoo.com",
  phone: 123456789,
};

//Post method
http
  .post("https://jsonplaceholder.typicode.com/users", user)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
