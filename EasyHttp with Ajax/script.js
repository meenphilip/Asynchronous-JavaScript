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
  body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
};

// post
http.post(
  "https://jsonplaceholder.typicode.com/posts",
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  },
);
