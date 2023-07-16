import React, { useState } from 'react';
import SavingsGoal from '../components/SavingsGoal';
import SavingsForm from '../components/SavingsForm';
import TransactionList from '../components/TransactionList';
import SaveButton from '../components/SaveButton';
import Login from '../components/Login';
import '../styles/Savings.css';

const ProtectedPage = () => {
  const [goal, setGoal] = useState('');
  const [editingGoal, setEditingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState('');
  const [pocketMoney, setPocketMoney] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionList, setTransactionList] = useState([]);
  const [totalSaved, setTotalSaved] = useState(0);
  const [spendingAmount, setSpendingAmount] = useState(0);
  const [spendingDescription, setSpendingDescription] = useState('');
  const [spendingDate, setSpendingDate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoalChange = (event) => {
    setNewGoal(event.target.value);
  };

  const handleGoalAction = () => {
    if (!editingGoal) {
      setEditingGoal(true);
    } else {
      if (newGoal) {
        setGoal(newGoal);
        setEditingGoal(false);
        setNewGoal('');
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
        date: transactionDate || new Date().toISOString().split('T')[0], // Use current date if transactionDate is blank
      };
  
      const updatedTransactionList = [...transactionList, transaction];
      setTransactionList(updatedTransactionList);
      setTotalSaved(totalSaved + pocketMoney);
      setPocketMoney(0);
      setTransactionDescription('');
      setTransactionDate('');
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
        date: spendingDate || new Date().toISOString().split('T')[0], // Use current date if spendingDate is blank
      };
  
      const updatedTransactionList = [...transactionList, transaction];
      setTransactionList(updatedTransactionList);
      setTotalSaved(totalSaved - spendingAmount);
      setSpendingAmount(0);
      setSpendingDescription('');
      setTransactionDate('');
      setSpendingDate('');
    }
  };

  const handleTransactionDateChange = (event) => {
    setTransactionDate(event.target.value);
  };

  const handleSpendingDateChange = (event) => {
    setSpendingDate(event.target.value);
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactionList = [...transactionList];
    const deletedTransaction = updatedTransactionList.splice(index, 1);
    setTransactionList(updatedTransactionList);
    setTotalSaved(totalSaved - deletedTransaction[0].amount);
  };

  const handleSave = () => {
    if (isLoggedIn) {
      console.log('Saving data...');
    } else {
      console.log('Please login or register to save.');
    }
  };

  return (
    <div className="main-container">
      <h1>My Savings</h1>
      {isLoggedIn ? (
        <p className="save-note">You are logged in. Your work is automatically retrieved.</p>
      ) : (
        <p className="save-note">Please log in to save or retrieve your work.</p>
      )}
      <div className="container">
        <div className="left-container">
          <SavingsForm
            pocketMoney={pocketMoney}
            transactionDescription={transactionDescription}
            handlePocketMoneyChange={handlePocketMoneyChange}
            handleDescriptionChange={handleDescriptionChange}
            handlePocketMoneySubmit={handlePocketMoneySubmit}
            spendingAmount={spendingAmount}
            spendingDescription={spendingDescription}
            handleSpendingAmountChange={handleSpendingAmountChange}
            handleSpendingDescriptionChange={handleSpendingDescriptionChange}
            handleSpendMoney={handleSpendMoney}
            handleTransactionDateChange={handleTransactionDateChange}
            handleSpendingDateChange={handleSpendingDateChange}
          />
        </div>
        <div className="right-container">
          <SavingsGoal
            goal={goal}
            editingGoal={editingGoal}
            newGoal={newGoal}
            handleGoalChange={handleGoalChange}
            handleGoalAction={handleGoalAction}
          />
          <TransactionList
            transactionList={transactionList}
            totalSaved={totalSaved}
            goal={goal}
            transactionDate={transactionDate}
            spendingDate={spendingDate}
            onDeleteTransaction={handleDeleteTransaction}
          />
        </div>
      </div>
      <SaveButton isLoggedIn={isLoggedIn} handleSave={handleSave} />
    </div>
  );
};

export default ProtectedPage;
