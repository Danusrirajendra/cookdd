import React, { useState, useEffect } from 'react';
import axios from 'axios';

const containerStyle = {
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: '2.5rem', // Increased font size
  fontWeight: 'bold',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#f8f8f8',
  padding: '15px',
  borderRadius: '10px',
  transition: 'transform 0.3s',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '15px',
};

const nameStyle = {
  fontSize: '1.5rem', // Increased font size
  fontWeight: '600',
};

const detailsStyle = {
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
};

const ingredientsStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  fontSize: '1.2rem', // Increased font size
};

const instructionsStyle = {
  marginTop: '10px',
  fontSize: '1.2rem', // Increased font size
};

const dishImageStyle = {
  width: '80%', // Set to medium size
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '15px',
};

const cuisines = [
  { id: 1, name: 'Italian', image: 'https://th.bing.com/th/id/OIP.frieO5C3HTjNkBVrBs1WaQHaEk?rs=1&pid=ImgDetMain', dishes: [
    { id: 1, name: 'Pasta Carbonara', image: 'https://i.pinimg.com/originals/6d/19/9a/6d199a6c3c9e9d0f6772d79f879dca8a.jpg', ingredients: ['Pasta', 'Eggs', 'Cheese', 'Pancetta'], instructions: [
      'Cook pasta according to package instructions.',
      'In a bowl, mix eggs and cheese.',
      'Cook pancetta in a pan until crispy.',
      'Combine cooked pasta with pancetta and egg mixture.',
      'Serve warm.'
    ]},
    { id: 2, name: 'Margherita Pizza', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-1080x1080.jpg', ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'], instructions: [
      'Preheat oven to 475°F (245°C).',
      'Roll out pizza dough and place on a baking sheet.',
      'Spread tomato sauce evenly over the dough.',
      'Top with mozzarella cheese.',
      'Bake in the oven for 12-15 minutes.',
      'Add fresh basil before serving.'
    ]},
  ]},
  { id: 2, name: 'Chinese', image: 'https://th.bing.com/th/id/OIP.RWxHHdgNaidR3t5IX6hkmAHaE8?rs=1&pid=ImgDetMain', dishes: [
    { id: 1, name: 'Kung Pao Chicken', image: 'https://th.bing.com/th/id/OIP.4AQVVkVA_OTJfzGb7qmkswHaLH?rs=1&pid=ImgDetMain', ingredients: ['Chicken', 'Peanuts', 'Bell Peppers', 'Sauce'], instructions: [
      'Cut chicken into bite-sized pieces.',
      'Stir-fry chicken with bell peppers until cooked through.',
      'Add peanuts and sauce to the pan.',
      'Cook until sauce thickens.',
      'Serve with rice.'
    ]},
    { id: 2, name: 'Sweet and Sour Pork', image: 'https://therecipecritic.com/wp-content/uploads/2021/04/sweetandsourpork.jpg', ingredients: ['Pork', 'Pineapple', 'Bell Peppers', 'Sauce'], instructions: [
      'Cut pork into cubes and cook in a pan until browned.',
      'Add bell peppers and pineapple to the pan.',
      'Pour sweet and sour sauce over the mixture.',
      'Cook until everything is heated through.',
      'Serve with rice or noodles.'
    ]},
  ]},
  { id: 3, name: 'Indian', image: 'https://th.bing.com/th/id/OIP.5Qi3KqFZDFjOW1j51N_x0wHaEd?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', dishes: [
    { id: 1, name: 'Chicken Curry', image: 'https://th.bing.com/th/id/OIP.lF5oI5XITo8fXLWsYLzqDgAAAA?rs=1&pid=ImgDetMain', ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices'], instructions: [
      'Cut chicken into pieces.',
      'Cook onions until golden brown.',
      'Add tomatoes and spices, cook until fragrant.',
      'Add chicken and cook until fully done.',
      'Serve with rice or naan.'
    ]},
    { id: 2, name: 'Palak Paneer', image: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Gravy/Palak_Paneer_Recipe_North_Indian_Punjabi-3.jpg', ingredients: ['Spinach', 'Paneer', 'Spices', 'Onions'], instructions: [
      'Blanch spinach and blend into a puree.',
      'Cook onions until soft.',
      'Add spinach puree and spices to the pan.',
      'Add paneer cubes and cook until heated through.',
      'Serve with rice or roti.'
    ]},
  ]},
  { id: 4, name: 'Mexican', image: 'https://th.bing.com/th/id/OIP.QKAMqBji5-zHpkV5gpzQ5AHaGE?w=247&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7', dishes: [
    { id: 1, name: 'Tacos', image: 'https://th.bing.com/th/id/OIP.pelK9k5ccm6GNDcM6fEozQAAAA?rs=1&pid=ImgDetMain', ingredients: ['Taco Shells', 'Ground Beef', 'Lettuce', 'Cheese', 'Salsa'], instructions: [
      'Cook ground beef in a pan.',
      'Fill taco shells with beef.',
      'Top with lettuce, cheese, and salsa.',
      'Serve immediately.'
    ]},
    { id: 2, name: 'Guacamole', image: 'https://th.bing.com/th/id/OIP.u2MfEdZVcoElJFsC2WZ7NwHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7', ingredients: ['Avocados', 'Onions', 'Tomatoes', 'Lime Juice', 'Cilantro'], instructions: [
      'Mash avocados in a bowl.',
      'Add chopped onions, tomatoes, lime juice, and cilantro.',
      'Mix well and serve with tortilla chips.'
    ]},
  ]},
];

function RecipesPage() {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the server when the component mounts
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const findRecipeForDish = (dishName) => {
    return recipes.find(recipe => recipe.dishName === dishName);
  };

  return (
    <div style={containerStyle}>
      <h1>Recipes Page</h1>
      <h2 style={headingStyle}>Explore Cuisines</h2>
      <div style={gridStyle}>
        {cuisines.map(cuisine => (
          <div 
            key={cuisine.id} 
            style={cardStyle} 
            onClick={() => handleCuisineClick(cuisine)}
          >
            <img 
              src={cuisine.image} 
              alt={cuisine.name} 
              style={imageStyle} 
              onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found'}
            />
            <h3 style={nameStyle}>{cuisine.name}</h3>
          </div>
        ))}
      </div>

      {selectedCuisine && (
        <div style={detailsStyle}>
          <h2>{selectedCuisine.name} Dishes</h2>
          {selectedCuisine.dishes.map(dish => (
            <div key={dish.id} style={{ marginBottom: '20px' }}>
              <img 
                src={dish.image} 
                alt={dish.name} 
                style={dishImageStyle} 
                onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found'}
              />
              <h3>{dish.name}</h3>
              <p><strong>Ingredients:</strong></p>
              <ul style={ingredientsStyle}>
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p><strong>Instructions:</strong></p>
              <ol style={instructionsStyle}>
                {dish.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>

              {/* Display recipe details if available */}
              {findRecipeForDish(dish.name) && (
                <div style={{ marginTop: '10px', fontSize: '1.2rem', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '8px' }}>
                  <p><strong>Submitted by:</strong> {findRecipeForDish(dish.name).username}</p>
                  <p><strong>Comments:</strong> {findRecipeForDish(dish.name).comments}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipesPage;
w