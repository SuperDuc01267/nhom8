export const getRecipes = async () => {
  const response = await fetch("http://localhost:5000/recipes");
  if (!response.ok) {
    throw new Error("Error fetching recipes");
  }
  const data = await response.json();
  return data;
};

export const addRecipe = async (recipe) => {
  const response = await fetch("http://localhost:5000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    throw new Error("Error adding recipe");
  }
};
