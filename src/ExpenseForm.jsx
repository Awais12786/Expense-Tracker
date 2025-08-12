import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (e) => {
    setExpenseTitle(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", expenseTitle);
    console.log("Amount:", amount);
    const expenseData = {
      title: expenseTitle,
      amount: +amount,
    };

    onAddExpense(expenseData);

    setExpenseTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-4"
    >
      <input
        value={expenseTitle}
        onChange={handleTitleChange}
        className="mt-5 border border-[#cfcfcf] py-2 px-3 rounded-md"
        type="text"
        placeholder="Expense Title..."
      />
      <input
        value={amount}
        onChange={handleAmount}
        className="border border-[#cfcfcf] py-2 px-3 rounded-md"
        type="text"
        placeholder="Amount"
      />
      <button
        type="submit"
        className="bg-blue-600 p-2 text-white rounded-lg font-semibold tracking-wide"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
