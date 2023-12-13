document.addEventListener('DOMContentLoaded', function () {
  const recipeListContainer = document.getElementById('recipeList');
  const addMoreRecipesButton = document.getElementById('addMoreRecipes');
  const cartContainer = document.getElementById('cart');

  if (!recipeListContainer || !addMoreRecipesButton || !cartContainer) {
    console.error("One or more required elements not found.");
    return;
  }

  let recipesArray = []; // Initialize recipes array

  // Function to display recipes in the container
  function displayRecipes() {
    recipeListContainer.innerHTML = '';
    recipesArray.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <p>Name: ${recipe.name}</p>
        <p>Packages Available: ${recipe.packagesAvailable}</p>
        <p>Price per Package: $${recipe.pricePerPackage.toFixed(2)}</p>
        <button class="addToCartButton">Add to Cart</button>
      `;
      const addToCartButton = recipeItem.querySelector('.addToCartButton');
      addToCartButton.addEventListener('click', function () {
        addToCart(recipe);
      });
      recipeListContainer.appendChild(recipeItem);
    });
  }

  // Function to fetch recipes from the API
  async function fetchRecipes() {
    try {
      const response = await fetch('recipe.json'); // Replace 'recipe.json' with your API endpoint
      const data = await response.json();
      recipesArray = data; // Update recipes array with fetched data
      displayRecipes();
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  // Initial fetch of recipes
  fetchRecipes();

  // Function to add a new recipe
  function addNewRecipe() {
    const newRecipes = [
      {
        "image": "images/tents/sandwich.webp",
        "name": "Victoria sandwich",
        "packagesAvailable": 210,
        "pricePerPackage": 9.99
      },
      {
        "image": "images/tents/cottagepie.webp",
        "name": "Cottage pie",
        "packagesAvailable": 220,
        "pricePerPackage": 10.99
      },
      {
        "image": "images/tents/chocolatechip.webp",
        "name": "Chocolate chip",
        "packagesAvailable": 230,
        "pricePerPackage": 11.99
      },
      {
        "image": "images/tents/roastchicken.webp",
        "name": "Roast chicken",
        "packagesAvailable": 240,
        "pricePerPackage": 12.99
      },
      {
        "image": "images/tents/lasagne.webp",
        "name": "Lasagne",
        "packagesAvailable": 250,
        "pricePerPackage": 13.99
      },
      {
        "image": "images/tents/stir-fry.webp",
        "name": "Stir-fry",
        "packagesAvailable": 260,
        "pricePerPackage": 14.99
      },
      {
        "image": "images/tents/applepie.webp",
        "name": "Apple pie",
        "packagesAvailable": 270,
        "pricePerPackage": 15.99
      },
      {
        "image": "images/tents/muffins.webp",
        "name": "Muffins",
        "packagesAvailable": 280,
        "pricePerPackage": 16.990000000000002
      },
      {
        "image": "images/tents/cheesecake.webp",
        "name": "Cheesecake",
        "packagesAvailable": 290,
        "pricePerPackage": 17.990000000000002
      },
      {
        "image": "images/tents/flapjacks",
        "name": "Flapjacks",
        "packagesAvailable": 300,
        "pricePerPackage": 18.990000000000002
      }
    ]

    recipesArray = recipesArray.concat(newRecipes);
    displayRecipes();
  }

  // Function to add a recipe to the cart
  function addToCart(recipe) {
    cartContainer.innerHTML += `
      <div>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p>Name: ${recipe.name}</p>
        <p>Price per Package: $${recipe.pricePerPackage.toFixed(2)}</p>
      </div>
    `;
  }

  // Event listener for adding more recipes
  addMoreRecipesButton.addEventListener('click', addNewRecipe);

});