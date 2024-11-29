import React, { useState } from 'react';
import axios from 'axios';

const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: '2rem',
  fontWeight: 'bold',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '1rem',
  fontWeight: '600',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const textareaStyle = {
  width: '100%',
  height: '100px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

const AddRecipe = () => {
  const [username, setUsername] = useState('');
  const [dishName, setDishName] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      username,
      dishName,
      comments,
    };

    try {
      await axios.post('http://localhost:5000/api/recipe', recipe);
      alert('Recipe added successfully!');
      setUsername('');
      setDishName('');
      setComments('');
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Failed to add recipe.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>ADD FEEDBACK/COMMENTS</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Dish Name:</label>
          <input
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Comments/Feedback:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            style={textareaStyle}
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
