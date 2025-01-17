import React, { useEffect, useState } from "react";
import { getRecipes } from "../api/recipeAPI";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Danh sách công thức</h2>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <p>
              <strong>Instructions:</strong> {recipe.instructions}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
