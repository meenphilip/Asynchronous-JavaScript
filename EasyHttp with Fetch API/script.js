//create object
const http = new EasyHTTP();

//call get method
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
