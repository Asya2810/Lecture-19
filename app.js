
//HW
// GET

// let getPost = { id: 2, title: "My second post" };

// fetch("https://my-json-server.typicode.com/Asya2810/ServerJson/posts/2",
//   {
//     method: "GET",
//   }
// )
//   .then((response) => {

//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));

// GET

// let getPost = { id: 1, title: "My first post" };

// fetch("https://my-json-server.typicode.com/Asya2810/ServerJson/posts/1",
//   {
//     method: "GET",
//   }
// )
//   .then((response) => {

//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));



// PUT

// let changedPost = { id: 2, title: "My changed second post" };

// fetch("https://my-json-server.typicode.com/Asya2810/ServerJson/posts/2",
//   {
//     method: "PUT",
//     body: JSON.stringify(changedPost),
//   }
// )
//   .then((response) => {
//     let el = document.getElementById('2')
//     // el.innerHTML = response.ok;
//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));

// POST

// let newPost = { title: "My third post" };

// fetch("https://my-json-server.typicode.com/Asya2810/ServerJson/posts", {
//   method: "POST",
//   body: JSON.stringify(newPost),
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));


// let changedPost = { id: 1, title: "My changed first post" };


// DELETE

// fetch("https://my-json-server.typicode.com/Asya2810/ServerJson/posts/1",
//   {
//     method: "DELETE",
//   }
// )
//   .then((response) => {
//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));