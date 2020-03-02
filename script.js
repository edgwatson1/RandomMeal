// FETCH

let meal = {};

const fetchMealFirst = () => {
  meal = {};
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
      meal = res.meals[0];
      renderAll();
    });
};
fetchMealFirst();

const fetchMealOthers = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
      // createMeal(res.meals[0]);
      meal = res.meals[0];
    });
};

function renderAll() {
  console.log("renderall");
  // const container = document.querySelector(".container");
  const header = document.querySelector(".header");
  const pic = document.querySelector(".pic");
  const instructions = document.querySelector(".instructions");
  const ingredients = document.querySelector(".ingredients");
  const ingredientsList = document.querySelector(".ingredients-list");
  const vid = document.querySelector(".videoWrapper");

  // container
  let h2HeaderContent = document.createElement("h2");
  let headerContent = document.createTextNode(meal.strMeal);

  h2HeaderContent.appendChild(headerContent);
  header.appendChild(h2HeaderContent);

  // pic
  let picContent = document.createElement("img");
  picContent.src = meal.strMealThumb;
  pic.appendChild(picContent);

  // instructions
  let instructionsContent = document.createTextNode(meal.strInstructions);
  instructions.appendChild(instructionsContent);

  // ingedients
  const getIngredients = mealData => {
    const ingredientsArray = [];
    for (let i = 1; i <= 20; i++) {
      if (mealData[`strIngredient${i}`]) {
        ingredientsArray.push(
          `${mealData[`strIngredient${i}`]} - ${mealData[`strMeasure${i}`]}`
        );
      }
    }
    return ingredientsArray;
  };

  let ingredientsArray = getIngredients(meal);
  ingredientsArray.forEach(ingredient => {
    let ingredientLI = document.createElement("li");
    ingredientLI.innerHTML = `${ingredient}`;
    ingredientsList.appendChild(ingredientLI);
  });

  // video
  let videoWrapperEmbed = document.createElement("div");
  videoWrapperEmbed.innerHTML = `
<iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(
    -11
  )}" </iframe>`;
  vid.appendChild(videoWrapperEmbed);
}

// let meal = {
//   idMeal: "52930",
//   strMeal: "Pate Chinois",
//   strDrinkAlternate: null,
//   strCategory: "Beef",
//   strArea: "Canadian",
//   strInstructions:
//     "In a large pot of salted water, cook the potatoes until they are very tender. Drain.\r\nWith a masher, coarsely crush the potatoes with at least 30 ml (2 tablespoons) of butter. With an electric mixer, pur\u00e9e with the milk. Season with salt and pepper. Set aside.\r\nWith the rack in the middle position, preheat the oven to 190 \u00b0C (375 \u00b0F).\r\nIn a large skillet, brown the onion in the remaining butter. Add the meat and cook until golden brown. Season with salt and pepper. Remove from the heat.\r\nLightly press the meat at the bottom of a 20-cm (8-inch) square baking dish. Cover with the corn and the mashed potatoes. Sprinkle with paprika and parsley.\r\nBake for about 30 minutes. Finish cooking under the broiler. Let cool for 10 minutes.",
//   strMealThumb:
//     "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
//   strTags: "MainMeal,Alcoholic",
//   strYoutube: "https://www.youtube.com/watch?v=QRFqnLkEv3I",
//   strIngredient1: "Potatoes",
//   strIngredient2: "Butter",
//   strIngredient3: "Milk",
//   strIngredient4: "Minced Beef",
//   strIngredient5: "Onion",
//   strIngredient6: "Creamed Corn",
//   strIngredient7: "Paprika",
//   strIngredient8: "Parsley",
//   strIngredient9: "Salt",
//   strIngredient10: "Pepper",
//   strIngredient11: "",
//   strIngredient12: "",
//   strIngredient13: "",
//   strIngredient14: "",
//   strIngredient15: "",
//   strIngredient16: "",
//   strIngredient17: "",
//   strIngredient18: "",
//   strIngredient19: "",
//   strIngredient20: "",
//   strMeasure1: "4 cups ",
//   strMeasure2: "60ml",
//   strMeasure3: "\u00bd cup ",
//   strMeasure4: "450g",
//   strMeasure5: "1 finely chopped ",
//   strMeasure6: "500ml",
//   strMeasure7: "to taste",
//   strMeasure8: "to taste",
//   strMeasure9: "Dash",
//   strMeasure10: "Dash",
//   strMeasure11: "",
//   strMeasure12: "",
//   strMeasure13: "",
//   strMeasure14: "",
//   strMeasure15: "",
//   strMeasure16: "",
//   strMeasure17: "",
//   strMeasure18: "",
//   strMeasure19: "",
//   strMeasure20: "",
//   strSource:
//     "https://www.ricardocuisine.com/en/recipes/5541-pate-chinois-shepherd--s-pie-",
//   dateModified: null
// };
