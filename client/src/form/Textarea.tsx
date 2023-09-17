import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface TemplateTextareaProps {
  state: string;
  setState: (value: string) => void;
  validate: (value: string) => void;
}

const Textarea: React.FC<TemplateTextareaProps> = (props) => {
  const [state, setState] = useState(props.state);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setState(newValue);
  };

  const errorMessage = props.validate(state);

  return (
    <>
      <textarea placeholder={state} onChange={handleTextareaChange} />

      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default Textarea;
