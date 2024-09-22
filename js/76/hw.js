(async function  (){
'use strict';
const menuItems=document.querySelectorAll('#menu');
const ingredients=document.querySelectorAll('#ing');
const recipeDiv=document.getElementById("response");
const recipeImg=document.getElementById("img");
const recipeName=document.getElementById("recipeName");
const ing2=document.getElementById("ing2");
console.log(recipeDiv);
function setText(elem,recipe){
    for (let index = 0; index < recipe.ingredients.length; index++) {
        recipeName.innerText=recipe.name;
        ing2.innerText="Ingredients"
        elem[index].innerText=`${recipe.ingredients[index]}`;
        
    }
    

};


;
const response=await fetch('recipes.json');
const recipes=await response.json();
for (let index = 0; index < menuItems.length; index++) {
    const element = menuItems[index];
    element.innerText=recipes[index].name;
    element.addEventListener("click",async e=>{
        const response2= await fetch(`${e.target.innerText}.json`);
        const recipes=await response2.json();
        setText(ingredients,recipes);
       
        recipeImg.src=`${element.innerText}.jpeg`

    })
    
    }


    











}());