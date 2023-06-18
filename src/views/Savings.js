import React, { useState, useEffect } from 'react';
import '../styles/Savings.css';

const Savings = () => {
  const [goal, setGoal] = useState('');
  const [editingGoal, setEditingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState('');
  const [pocketMoney, setPocketMoney] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionList, setTransactionList] = useState([]);
  const [totalSaved, setTotalSaved] = useState(0);
  const [spendingAmount, setSpendingAmount] = useState(0);
  const [spendingDescription, setSpendingDescription] = useState('');

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
    setNewGoal(event.target.value);
  };

  const handleGoalAction = () => {
    if (!editingGoal) {
      // Start editing the goal
      setEditingGoal(true);
    } else {
      // Save the new goal
      if (newGoal) {
        setGoal(newGoal);
        setEditingGoal(false);
        setNewGoal('');

        // Update the savings goal in the backend API
        fetch('/api/savings_goals/1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: newGoal }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Savings goal updated:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  };

  const handlePocketMoneyChange = (event) => {
    const amount = parseFloat(event.target.value);
    setPocketMoney(amount);
  };

  const handleDescriptionChange = (event) => {
    setTransactionDescription(event.target.value);
  };

  const handlePocketMoneySubmit = (event) => {
    event.preventDefault();

    if (pocketMoney !== 0) {
      const transaction = {
        amount: pocketMoney,
        description: transactionDescription,
      };

      const updatedTransactionList = [...transactionList, transaction];
      setTransactionList(updatedTransactionList);
      setTotalSaved(totalSaved + pocketMoney);
      setPocketMoney(0);
      setTransactionDescription('');
    }
  };

  const handleSpendingAmountChange = (event) => {
    const amount = parseFloat(event.target.value);
    setSpendingAmount(amount);
  };

  const handleSpendingDescriptionChange = (event) => {
    setSpendingDescription(event.target.value);
  };

  const handleSpendMoney = () => {
    if (spendingAmount !== 0) {
      const transaction = {
        amount: -spendingAmount,
        description: spendingDescription,
      };

      const updatedTransactionList = [...transactionList, transaction];
      setTransactionList(updatedTransactionList);
      setTotalSaved(totalSaved - spendingAmount);
      setSpendingAmount(0);
      setSpendingDescription('');
    }
  };

  return (
    <div className="main-container">
      <h1>My Savings</h1>

      <div className="container">
        <div className="left-container">
          <h2>Savings Goal: €{goal}</h2>
          {editingGoal ? (
            <div>
              <input type="number" value={newGoal} onChange={handleGoalChange} />
              <button onClick={handleGoalAction}>Save Goal</button>
            </div>
          ) : (
            <button onClick={handleGoalAction}>{goal ? 'Edit Goal' : 'Add Goal'}</button>
          )}
        </div>

        <div className="right-container">
          <div className="form-container">
            <form onSubmit={handlePocketMoneySubmit}>
              <h2>Pocket Money Record</h2>
              <label>
                Pocket Money: 
                <input type="number" value={pocketMoney} 
                onChange={handlePocketMoneyChange} 
                style={{ marginLeft: '5px' }} 
                />
              </label>
              <br/>
              <br/>
              <label>
                Description: 
                <input
                  type="text"
                  value={transactionDescription}
                  onChange={handleDescriptionChange}
                  style={{ marginLeft: '5px' }} 
                />
              </label>
              <br/>
              <br/>
              <button type="submit">Add</button>
            </form>

            <form>
              <h2>Spending</h2>
              <label>
                Amount Spent: 
                <input
                  type="number"
                  value={spendingAmount}
                  onChange={handleSpendingAmountChange}
                  style={{ marginLeft: '5px' }} 
                />
              </label>
              <br/>
              <br/>
              <label>
                Description:
                <input
                  type="text"
                  value={spendingDescription}
                  onChange={handleSpendingDescriptionChange}
                  style={{ marginLeft: '5px' }} 
                />
              </label>
              <br/>
              <br/>
              <button type="button" onClick={handleSpendMoney}>
                Spend
              </button>
            </form>
          </div>

          <div>
            <h2>Transaction List</h2>
            <ul>
              {transactionList.map((transaction, index) => (
                <li key={index}>
                  {transaction.description} - €{transaction.amount.toFixed(2)}
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 'bold' }}>Total Saved: €{totalSaved.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
