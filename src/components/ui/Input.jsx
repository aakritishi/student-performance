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
        className="px-4 py-3 pl-8 rounded border border-gray-400 w-full mb-3 focus"
      />
    </div>
  );
};

export default Input;
