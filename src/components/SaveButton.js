import React from 'react';

const SaveButton = ({ isLoggedIn, handleSave }) => {
  return (
    <div className="save-container">
      <div className="save-button-container">
        {isLoggedIn && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
};

export default SaveButton;
