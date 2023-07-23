import React from 'react';

const formatAmount = (amount) => {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const ExpenseResult = ({ totalCost, numberOfPeople, costPerPerson }) => {
  return (
    <div className="expense-result">
      <div className="result-text">
        <label>Total Cost:</label>
        {totalCost !== '' ? <span>€{formatAmount(parseFloat(totalCost))}</span> : <span>-</span>}
      </div>
      <div className="result-text">
        <label>Number of People: </label>
        {numberOfPeople !== '' ? <span>{numberOfPeople}</span> : <span>-</span>}
      </div>
      {costPerPerson !== null && (
        <div className="result-text">
          <label>Cost per Person:</label>
          <span>€{formatAmount(costPerPerson)}</span>
        </div>
      )}
    </div>
  );
};

export default ExpenseResult;
