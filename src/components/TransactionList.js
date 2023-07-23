import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Savings.css';

const TransactionList = ({ transactionList, totalSaved, goal, onDeleteTransaction }) => {
  const amountLeftToSave = goal - totalSaved;

  return (
    <div className="transaction-list">
      <div>
      <div className="container-with-h2">
        <h2>Transaction List</h2>
        </div>
        <ul>
          {transactionList.map((transaction, index) => (
            <li key={index}>
              <span className="transaction-date" style={{ marginLeft: '10px', fontStyle: 'italic' }}>{transaction.date ? transaction.date : '-'}</span>
              <span className="transaction-description">{transaction.description}</span>
              <span className="transaction-amount"> : {transaction.amount < 0 ? '-' : ''}€
              {Math.abs(transaction.amount).toLocaleString('en-IE', { minimumFractionDigits: 2 })} </span>
              <button onClick={() => onDeleteTransaction(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
        <p className="total-saved" style={{ fontWeight: 'normal' }}>
          Total Saved: {totalSaved < 0 ? '-' : ''}€
          {Math.abs(totalSaved).toLocaleString('en-IE', { minimumFractionDigits: 2 })}
        </p>
        {totalSaved >= goal ? (
          <p className="goal-reached-message" style={{ fontWeight: 'bold' }}>Goal Reached!</p>
        ) : (
          <p className="amount-left-to-save" style={{ fontWeight: 'normal' }}>
            Amount Left to Save: {amountLeftToSave < 0 ? '-' : ''}€
            {Math.abs(amountLeftToSave).toLocaleString('en-IE', { minimumFractionDigits: 2 })}
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
