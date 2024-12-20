import React from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import { useEffect, useState } from 'react';

export default function App() {

  let [Loadedrecipes, setRecipes] = useState({
    recipes: []
  });
  let [savedSelectedRecipe, recipeSelector] = useState({
    selectedRecipe:1
  });







  useEffect(() => {
    async function fetchData() {
      try {
        const r = await fetch('./recipes.json');
        if (!r.ok) {
          throw new Error(`${r.status} - ${r.statusText}`);
        }
        const recipes = await r.json();
        setRecipes({
          recipes
        });
      } catch (e) {
        console.error(e);
      }
    } fetchData()
  },[]);

  function recipeSelected(index) {
    //recipeSelected = e => {
    //console.log(e);
    recipeSelector({
      selectedRecipe: index
    });
  }


  const { recipes } = Loadedrecipes;
  const {selectedRecipe}  = savedSelectedRecipe;
  console.log(selectedRecipe)

  const recipeJsx = recipes.length ? <Recipe recipe={recipes[selectedRecipe]} /> : <div>loading...</div>;

  return (
    <div className="container text-center">
      <h1>PCS Recipes</h1>
      <RecipeList recipes={recipes} recipeSelectedHandler={recipeSelected} />
      <hr />
      {recipeJsx}
    </div>
  )

}
