import React from "react";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-3 py-3 rounded border border-gray-400 w-full mb-3 focus"
      />
    </div>
  );
};

export default Input;
