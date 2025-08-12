import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense}) => {
  return (
    <div className="expense-list rounded-xl overflow-hidden">
      {expense.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
