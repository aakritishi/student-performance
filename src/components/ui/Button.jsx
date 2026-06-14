import React from "react";

const Button = ({ type, onClick, children }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="text-white bg-[#125887] hover:bg-[#031D44] font-normal px-4 py-2 rounded my-2"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
