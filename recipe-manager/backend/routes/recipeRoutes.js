const fs = require("fs");
const path = require("path");

const recipesDataPath = path.join(__dirname, "../data/recipes.json");

// Lấy tất cả công thức
function getRecipes(req, res) {
  fs.readFile(recipesDataPath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error reading data");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.end(data);
    }
  });
}

// Thêm một công thức mới
function addRecipe(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const newRecipe = JSON.parse(body);
    fs.readFile(recipesDataPath, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading data");
        return;
      }
      const recipes = JSON.parse(data);
      recipes.push(newRecipe);
      fs.writeFile(recipesDataPath, JSON.stringify(recipes, null, 2), (err) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error saving new recipe");
        } else {
          res.statusCode = 201;
          res.end("Recipe added");
        }
      });
    });
  });
}

// Định nghĩa các route
const routes = [
  {
    method: "GET",
    path: "/recipes",
    handler: getRecipes,
  },
  {
    method: "POST",
    path: "/recipes",
    handler: addRecipe,
  },
];

module.exports = routes;
