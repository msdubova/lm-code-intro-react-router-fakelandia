import React from "react";
interface buttonProps {
  isValid: boolean;
}
const Button: React.FC<buttonProps> = ({ isValid }) => {
  return (
    <button type="submit" disabled={!isValid}>
      Confess
    </button>
  );
};

export default Button;
