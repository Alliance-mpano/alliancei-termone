import React from "react";
import "../styles/Button.css";

const Button = ({ className, value }) => {
  return (
    <p className={className}>
      {value}
    </p>
  );
};

export default Button;