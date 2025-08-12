import React from "react";

const ExpenseItem = ({ title, amount }) => {
  return (
    <div className="flex flex-col justify-center last:border-b-0">
      <div className="flex justify-between px-4 py-4 border-b border-gray-300">
        <h2 className="text-xl font-normal tracking-wide text-black">
          {title}
        </h2>
        <h4 className="text-xl font-normal tracking-wide text-black">
          {amount}
        </h4>
      </div>
    </div>
  );
};

export default ExpenseItem;
