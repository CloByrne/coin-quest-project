import React from 'react';
import axios from 'axios';

const ExpenseSplitter = ({ totalCost, setTotalCost, numberOfPeople, setNumberOfPeople, handleSplitExpense }) => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const newExpense = {
      total_cost: parseFloat(totalCost),
      number_of_people: parseInt(numberOfPeople),
    };

    try {
      const response = await axios.post('http://localhost:3000/api/expenses', { expense: newExpense });
      console.log('Expense created successfully:', response.data);

      // Calculate cost per person and pass it back to the parent component
      const calculatedCostPerPerson = totalCost / numberOfPeople;
      handleSplitExpense(calculatedCostPerPerson);

      // Don't reset the totalCost and numberOfPeople here, so they retain their values in the parent component
    } catch (error) {
      console.log('Error creating expense:', error);
    }
  };

  const handleTotalCostChange = (e) => {
    setTotalCost(e.target.value);
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(parseInt(e.target.value)); // Parse the input as an integer
  };

  return (
    <div className="expense-splitter">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Total Cost:</label>
          <input type="number" value={totalCost} name="totalCost" onChange={handleTotalCostChange} required />
        </div>
        <div>
          <label>Number of People:</label>
          <input type="number" value={numberOfPeople} name="numberOfPeople" onChange={handleNumberOfPeopleChange} required />
        </div>
        <button type="submit">Split Expense</button>
      </form>
    </div>
  );
};

export default ExpenseSplitter;
