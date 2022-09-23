const posts = [
  { title: "Post one", body: "lorem ipsum" },
  { title: "Post Two", body: "This is post Two" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      //error case
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post Three" })
  .then(getPosts)
  .catch((err) => {
    console.error(err);
  });

// getPosts();
