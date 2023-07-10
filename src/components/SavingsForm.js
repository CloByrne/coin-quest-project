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
        <h2>Savings</h2>
        <label>
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
        <label>
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
        <label>
          Date:
          <input
            type="date"
            value={transactionDate}
            onChange={handleTransactionDateChangeInternal}
            style={{ marginLeft: '5px' }}
          />
        </label>
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
        <br />
        <br />
        <label>
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
        <label>
          Date:
          <input
            type="date"
            value={spendingDate}
            onChange={handleSpendingDateChangeInternal}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <button type="button" onClick={handleSpendMoney}>
          Spend
        </button>
      </form>
    </div>
  );
};

export default SavingsForm;
