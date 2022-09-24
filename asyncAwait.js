// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 1000);
//   });

//   const error = false;
//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await the response of fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceeds once the promise is resolved
  const data = await response.json();
  // Only proceed once the second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
