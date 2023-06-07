// (function () {
//   fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let rootElem = document.getElementById("rootElem");
//       data.products.forEach((e) => {
//         // console.log(e.title);
//         rootElem.innerHTML += `
//       <div class="col-lg-3 col-md-4 col-sm-6">
//         <div class="card">
//             <img src="${
//               e.images[0]
//             }" class="card-img-top" alt="..." height="200px">
//             <div class="card-body">
//               <h5 class="card-title">${e.title + e.brand}</h5>
//               <p class="card-text">${e.description}</p>
//               <a href="#" class="btn btn-primary">${e.price}</a>
//             </div>
//           </div>

//     </div>
//       `;
//       });
//     });
// })();

(async function () {
  await fetch("json/recipes.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let searchBar = document.getElementById("searchBar");
      let btn = document.getElementById("btn");
      let list = document.getElementById("myList");

      function displayResult(result) {
        list.innerHTML = "";
        //  console.log(result)
        result.forEach((value) => {
          list.innerHTML += `
  <li>
  <h2>${value.title}</h2>
  <p>${value.description}</p>
  
  </li>
  
  
  `;
        });
      }

      function search() {
        let query = searchBar.value;
        console.log(query);

        let result = data.filter(function (recipe) {
          return (
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.join("").toLowerCase().includes(query)
          );
        });
        // console.log(result)
        displayResult(result);
      }

      btn.addEventListener("click", search);
    });
})();
