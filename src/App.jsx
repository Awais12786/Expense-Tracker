import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const App = () => {
  const [expense, setexpense] = useState([]);

  useEffect(() => {
    const storeExpense = localStorage.getItem("expense");
    if (storeExpense) {
      setexpense(JSON.parse(storeExpense));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expense));
  }, [expense]);

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
