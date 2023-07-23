import React, { useState } from 'react';

const SavingsGoal = ({ goal, editingGoal, newGoal, handleGoalChange, handleGoalAction }) => {
  const [error, setError] = useState(false); // State variable for tracking the error

  const handleSaveGoal = () => {
    if (!newGoal) {
      setError(true); // Set the error state if the input field is blank
    } else {
      setError(false); // Reset the error state if the input field is not blank
      handleGoalAction();
    }
  };

  return (
    <div className="saving-goal">
      <div className="container-with-h2">
      <h2>Savings Goal: €{goal}</h2>
      </div>
      {editingGoal ? (
        <label>
          <div className="goal-form">
            <p style={{ fontWeight: 'normal', marginBottom: '2px', marginRight: '20px', display: 'inline-block' }}>
              Enter your target savings amount:
            </p>
            <input type="number" value={newGoal} onChange={handleGoalChange} style={{ display: 'inline-block' }} />
            {error && <p style={{ color: 'red' }}>Please enter a savings amount.</p>} {/* Render the error message */}
            <button onClick={handleSaveGoal}>Save Goal</button>
          </div>
        </label>
      ) : (
        <button onClick={handleGoalAction}>{goal ? 'Edit Goal' : 'Add Goal'}</button>
      )}
    </div>
  );
};

export default SavingsGoal;
