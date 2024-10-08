const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
let searchQuery = "";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const APP_ID = '33b1a0ef';
  const APP_key = '5e12645236de1c7eb43b725fd06a49ee';
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
}

function generateHTML(results) {
  let generatedHTML = '';
  results.map(result => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="${result.recipe.label}">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" href="${result.recipe.url}" target="_blank">View Recipe</a>
        </div>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
