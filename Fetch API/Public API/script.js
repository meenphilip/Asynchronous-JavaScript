const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

btnEl.addEventListener("click", loadFetchData);

function loadFetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      let output = "";
      for (const post of posts) {
        output += `
        <li>ID: ${post.id}</li>
        <li>Title: ${post.title}</li>
        <li>Body: ${post.body}</li>
        `;
      }
      outputEl.innerHTML = output;
    });
}
