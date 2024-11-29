import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Recipes from './assets/pages/RecipesPage';
import AddRecipe from './assets/pages/AddRecipe'; // Import the AddRecipe component
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import SignupPage from './assets/pages/SignupPage';
import Frame from './assets/components/Frame'; // Import the Frame component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Frame><Home /></Frame>} />
        <Route path="/recipes" element={<Frame><Recipes /></Frame>} />
        <Route path="/add-recipe" element={<Frame><AddRecipe /></Frame>} /> {/* Add the AddRecipe route */}
        <Route path="/SignupPage" element={<Frame><SignupPage /></Frame>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
