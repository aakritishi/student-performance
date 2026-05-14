import React from "react";

const Button = ({ type, onClick, children }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="text-white bg-blue-500 hover:bg-blue-700 font-normal hover:font-bold px-4 py-2 rounded"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
