import React from "react";
interface buttonProps {
  isValid: boolean;
  onSubmit: (e: React.FormEvent) => void;
}
const Button: React.FC<buttonProps> = ({ isValid, onSubmit }) => {
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(e);
    }
  };
  return (
    <button type="submit" disabled={!isValid} onClick={handleClick}>
      Confess
    </button>
  );
};

export default Button;
