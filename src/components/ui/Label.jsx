import React from "react";

const Label = ({text, htmlFor}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-normal text-lg font-normal block mb-1">
        {text}
      </label>
    </div>
  );
};

export default Label;
