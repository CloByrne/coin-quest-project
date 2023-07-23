import React, { useState } from 'react';

const SavingsForm = ({
  pocketMoney,
  transactionDescription,
  handlePocketMoneyChange,
  handleDescriptionChange,
  handlePocketMoneySubmit,
  spendingAmount,
  spendingDescription,
  handleSpendingAmountChange,
  handleSpendingDescriptionChange,
  handleSpendMoney,
  handleTransactionDateChange,
  handleSpendingDateChange,
}) => {
  const [transactionDate, setTransactionDate] = useState('');
  const [spendingDate, setSpendingDate] = useState('');

  const handleTransactionDateChangeInternal = (event) => {
    const date = event.target.value;
    setTransactionDate(date);
    handleTransactionDateChange(event);
  };

  const handleSpendingDateChangeInternal = (event) => {
    const date = event.target.value;
    setSpendingDate(date);
    handleSpendingDateChange(event);
  };

  return (
    <div>
      <form onSubmit={handlePocketMoneySubmit}>
      <div className="container-with-h2">
        <h2>Savings</h2>
        </div>
        <label className="pocket-money">
          Pocket Money:
          <input
            type="number"
            value={pocketMoney}
            onChange={handlePocketMoneyChange}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <br />
        <br />
        <label className="input-description">
          Description:
          <input
            type="text"
            value={transactionDescription}
            onChange={handleDescriptionChange}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <br />
        <br />
        <label className="input-date">
          Date:
          <input
            type="date"
            value={transactionDate}
            onChange={handleTransactionDateChangeInternal}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <button type="submit" className="pocket-money-button">Add</button>
      </form>

      <form>
      <div className="container-with-h2">
        <h2>Spending</h2>
        </div>
        <label className="spending-money">
          Amount Spent:
          <input
            type="number"
            value={spendingAmount}
            onChange={handleSpendingAmountChange}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <br />
        <br />
        <label className="spending-description">
          Description:
          <input
            type="text"
            value={spendingDescription}
            onChange={handleSpendingDescriptionChange}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <br />
        <br />
        <label className="spending-date">
          Date:
          <input
            type="date"
            value={spendingDate}
            onChange={handleSpendingDateChangeInternal}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <button type="button" onClick={handleSpendMoney} className="spend-button">
          Spend
        </button>
      </form>
    </div>
  );
};

export default SavingsForm;
