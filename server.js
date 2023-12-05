const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRouter = require('./routes/randomRecipes.routes');
const app = express();


app.use('/recipes', recipeRouter);
app.use('/ingredients', ingredientRouter);
app.use('/fullrecipes', fullRecipesRouter);
app.use('/random', randomRouter);

app.listen(3000, () =>{
    
});
