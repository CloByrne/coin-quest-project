import React, { useState, useEffect } from 'react';

const Savings = () => {
  const [goal, setGoal] = useState('');
  const [pocketMoney, setPocketMoney] = useState(0);
  const [totalSaved, setTotalSaved] = useState(0);

  useEffect(() => {
    // Fetch the savings goal from the backend API
    fetch('/api/savings_goals')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setGoal(data[0].amount.toString());
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handlePocketMoneyChange = (event) => {
    const amount = parseFloat(event.target.value);
    setPocketMoney(amount);
  };

  const handlePocketMoneySubmit = (event) => {
    event.preventDefault();
    setTotalSaved(totalSaved + pocketMoney);
    setPocketMoney(0);
  };

  const handleGoalAction = () => {
    if (goal) {
      // Update the savings goal
      fetch('/api/savings_goals/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: goal }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Savings goal updated:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // Add a new savings goal
      fetch('/api/savings_goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: goal }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Savings goal added:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <h2>Savings Goal: {goal}</h2>
      <button onClick={handleGoalAction}>{goal ? 'Edit Goal' : 'Add Goal'}</button>

      <form onSubmit={handlePocketMoneySubmit}>
        <label>
          Pocket Money:
          <input type="number" value={pocketMoney} onChange={handlePocketMoneyChange} />
        </label>
        <button type="submit">Add</button>
      </form>

      <p>Total Saved: €{totalSaved.toFixed(2)}</p>
    </div>
  );
};

export default Savings;
