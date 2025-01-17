export const getRecipes = async () => {
  const response = await fetch("http://localhost:5000/recipes"); // Đảm bảo đường dẫn này đúng
  if (!response.ok) {
    throw new Error("Error fetching recipes");
  }
  const data = await response.json();
  return data;
};
