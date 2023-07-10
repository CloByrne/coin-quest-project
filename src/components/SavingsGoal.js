import React from 'react';

const SavingsGoal = ({ goal, editingGoal, newGoal, handleGoalChange, handleGoalAction }) => {
  return (
    <div>
      <h2>Savings Goal: €{goal}</h2>
      {editingGoal ? (
        <label>
          <div className="goal-form"> {/* Add the goal-form class name here */}
            <p style={{ fontWeight: 'normal', marginBottom: '2px', marginRight: '20px', display: 'inline-block' }}>
              Enter your target savings amount:
            </p>
            <input type="number" value={newGoal} onChange={handleGoalChange} style={{ display: 'inline-block' }} />
            <button onClick={handleGoalAction}>Save Goal</button>
          </div>
        </label>
      ) : (
        <button onClick={handleGoalAction}>{goal ? 'Edit Goal' : 'Add Goal'}</button>
      )}
    </div>
  );
};

export default SavingsGoal;
