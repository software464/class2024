import React, { Component } from 'react'

export default class AddRecipe extends Component {

    state={
        recipelist:[1,2],
        recipeDetails:[]
    }


   

    handleInputChange=(e)=>{
       if (e.target.name==="name"){
        this.setState({
            recipelist:[...this.state.recipelist,e.target.value]

        })
    }
    else{
        this.setState({
            recipeDetails:[...this.state.recipeDetails,e.target.value]
        })
    }
        
        
    
        

    }
  render() {
    const {recipelist}=this.state
    console.log(recipelist[2]);
    return (
      <div id='addRecipe'>
       <label htmlFor="name">name
        <input
        onBlur={this.handleInputChange} name ="name"type="text" />
    
       </label>
       <label htmlFor="ingredient">ingredients <input name='ing1' type="text" />
       <input onBlur={this.handleInputChange}name='ing2' type="text" />
       <input onBlur={this.handleInputChange} type="text" /></label>
      </div>
    )
  }
}
