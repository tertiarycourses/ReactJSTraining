export default class RecipeList extends React.Component {

    constructor(props) {
    	super(props);
      this.state = { 
        recipe : {
          "name": "Baked Salmon",
          "ingredients": [
            { "name": "Salmon", "amount": 1, "measurement": "l lb" },
            { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
            { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
            { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
            { "name": "Garlic", "amount": 3, "measurement": "cloves" }
          ],
          "steps": [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
          ]
        }
      }
  	}

    renderIngredients() {
      var ingredients = this.state.recipe.ingredients.map((ingredient, i) => {
        return (
          <li key={i} className="steps">{ingredient.name}</li>
        );
      });
      return ingredients;
    }

    renderInstructions() {
      var steps = this.state.recipe.steps.map((step, i) => {
        return (
          <p key={i} className="steps">{step}</p>
        );
      });
      return steps;
    }

  	render() {
	    return (
        <div className="recipe">
          <h1>{this.state.recipe.title}</h1>
          <ul className="ingredients">
            {this.renderIngredients()}
          </ul>
          <h2>Cooking Instructions</h2>
  	      <ul className="instructions">
            {this.renderInstructions()}
          </ul>
        </div>
	    );
  	}
}