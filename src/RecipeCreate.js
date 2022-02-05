import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleName = (event) => setName(event.target.value);
  const handleCuisine = (event) => setCuisine(event.target.value);
  const handlePhoto = (event) => setPhoto(event.target.value);
  const handleIngredients = (event) => setIngredients(event.target.value);
  const handlePreparation = (event) => setPreparation(event.target.value);
  
  console.log("Curent value of formData:", name, cuisine, photo, ingredients, preparation);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Submitted:", name, cuisine, photo, ingredients, preparation);
    addRecipe({name, cuisine, photo, ingredients, preparation});
    
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input 
                  name= "name" 
                  type="text" 
                  placeholder="Name" 
                  size="8" 
                  onChange={handleName} 
                  value={name} 
                 />
            </td>
            <td><input 
                  name="cuisine" 
                  type="text" 
                  placeholder="Cuisine" 
                  size="8" 
                  onChange={handleCuisine} 
                  value={cuisine}
                 />
            </td>
            <td><input 
                  name="photo" 
                  type="url" 
                  placeholder="URL" 
                  size="10" 
                  onChange={handlePhoto} 
                  value={photo}
                 />
            </td>
            <td><textarea 
                  name="ingredients" 
                  type="text" 
                  placeholder="Ingredients" 
                  onChange={handleIngredients} 
                  value={ingredients}
                 >
                </textarea>
            </td>
            <td><textarea 
                  name="preparation" 
                  type="text" 
                  placeholder="Preparation" 
                  onChange={handlePreparation} 
                  value={preparation}
                 >
              </textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
