const posts = [
  { title: "Post one", body: "lorem ipsum" },
  { title: "Post Two", body: "This is post Two" },
];

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
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

createPost({ title: "Post Two", body: "This is post Three" });

getPosts();
