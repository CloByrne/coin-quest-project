import React, { useState } from 'react';
import ExpenseSplitter from '../components/ExpenseSplitter';
import ExpenseResult from '../components/ExpenseResult';
import '../styles/Splitter.css'; 

const ExpenseSplitterPage = () => {
  const [totalCost, setTotalCost] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [costPerPerson, setCostPerPerson] = useState(null);

  const handleSplitExpense = (calculatedCostPerPerson) => {
    setCostPerPerson(calculatedCostPerPerson);
  };

  return (
    <div className="expense-grid">
      <div className="split-container">
      <h1>Split Your Bill</h1>
      <div className="split-sub-text">
          <p>Enter in the pocket money that you have received and the money you have spent in the first column. </p>
          <p>In the second column enter your savings goal and view the transaction list to see how much you have let to save. </p>
        </div>
      </div>
      <div className="container">
        <div className="left-container">
          <div className="container-with-h2">
            <h2>Enter Your Bill Details</h2>
          </div>
          <ExpenseSplitter
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            handleSplitExpense={handleSplitExpense}
          />
        </div>
        <div className="right-container">
          <div className="container-with-h2">
            <h2>Split Results</h2>
          </div>
          <ExpenseResult totalCost={totalCost} numberOfPeople={numberOfPeople} costPerPerson={costPerPerson} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseSplitterPage;