import React from "react";

import "./FormInput.style.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label className="phone-filed">{label}</label>
      <input {...otherProps} placeholder={label} />
    </div>
  );
};

export default FormInput;
