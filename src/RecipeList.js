import React from "react";

function RecipeList({deleteRecipe, recipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="cuisine">Cuisine</th>
            <th className="photo">Photo</th>
            <th className="ingredients">Ingredients</th>
            <th className="preparation">Preparation</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        {recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => {
            return [
                    <tbody>
                          <tr>
                                <td>{name}</td>
                                <td>{cuisine}</td>
                                <td><img src={photo} alt={name} /></td>
                                <td>{ingredients}</td>
                                <td>{preparation}</td>
                                <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
                          </tr>
                   </tbody>
                   ];
          })}
      </table>
    </div>
  );
}

export default RecipeList;
