const http = new easyHTTP();

//Get posts
// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// create data
const data = {
  title: "custom post",
  body: "(UPDATED)eveniet quo quis\nlaborum totam consequatur non dolor",
};

// post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   },
// );

// update post with PUT
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   },
// );

//Delete Request
http.delete(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  },
);
