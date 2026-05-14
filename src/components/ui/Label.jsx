import React from "react";

const Label = ({text, htmlFor}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-normal">
        {text}
      </label>
    </div>
  );
};

export default Label;
