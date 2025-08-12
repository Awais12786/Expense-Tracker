import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const App = () => {
  const [expense, setexpense] = useState([]);
  const addExpense = (expense) => {
    setexpense((prevExpenses) => [...prevExpenses, expense]);
    console.log(expense);
  };
  return (
  <div className="glow-bg flex justify-center mt-8">
    <div className="shadow-lg py-8 px-10 bg-white rounded-xl">
      <h1 className="text-3xl font-bold tracking-wide text-black">
        💰 Expense Tracker
      </h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expense={expense} />
    </div>
  </div>
);

};

export default App;
