import React from 'react';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful Indian-inspired curry.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} title={recipe.title} description={recipe.description} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
