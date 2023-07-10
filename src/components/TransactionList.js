import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Savings.css';

const TransactionList = ({ transactionList, totalSaved, goal, onDeleteTransaction }) => {
  const amountLeftToSave = goal - totalSaved;

  return (
    <div className="transaction-list">
      <div>
        <h2>Transaction List</h2>
        <ul>
          {transactionList.map((transaction, index) => (
            <li key={index}>
              <span className="transaction-date" style={{ marginLeft: '10px', fontStyle: 'italic' }}>{transaction.date ? transaction.date : '-'}</span>
              <span>{transaction.description}</span> : {transaction.amount < 0 ? '-' : ''}€
              {Math.abs(transaction.amount).toLocaleString('en-IE', { minimumFractionDigits: 2 })}
              <button onClick={() => onDeleteTransaction(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: 'normal' }}>
          Total Saved: {totalSaved < 0 ? '-' : ''}€
          {Math.abs(totalSaved).toLocaleString('en-IE', { minimumFractionDigits: 2 })}
        </p>
        {totalSaved >= goal ? (
          <p style={{ fontWeight: 'bold' }}>Goal Reached!</p>
        ) : (
          <p style={{ fontWeight: 'normal' }}>
            Amount Left to Save: {amountLeftToSave < 0 ? '-' : ''}€
            {Math.abs(amountLeftToSave).toLocaleString('en-IE', { minimumFractionDigits: 2 })}
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
