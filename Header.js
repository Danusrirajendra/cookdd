import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to link your CSS file

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1 className="header-logo">Cookd</h1>
      </div>
      <nav className="header-nav">
        <Link to="/signuppage" className="nav-link">Sign Up</Link> {/* Signup link */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/recipes" className="nav-link">Recipes</Link>
        <Link to="/add-recipe" className="nav-link">Comments</Link> {/* AddRecipe link */}
        
      </nav>
    </header>
  );
}

export default Header;
