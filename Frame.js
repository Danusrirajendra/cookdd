import React from 'react';
import './Frame.css';

function Frame({ children }) {
  return (
    <div className="frame-container">
      {children}
    </div>
  );
}

export default Frame;
