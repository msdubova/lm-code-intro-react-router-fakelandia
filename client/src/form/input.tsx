import { useState } from "react";
import ErrorMessage from "./error_message";

interface TemplateInput {
  state: string;
  setState: (value: string) => void;
  validate: (value: string) => void;
}

const Input: React.FC<TemplateInput> = (props) => {
  const [state, setState] = useState(props.state);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setState(newValue);
  };

  const errorMessage = props.validate(state);
  return (
    <>
      <p>
        <label htmlFor="inputSubject">Subject</label>
        <input
          id="inputSubject"
          type="text"
          value={state}
          onChange={handleInputChange}
        />
      </p>

      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};
export default Input;
