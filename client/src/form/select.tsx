import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface selectProps {
  state: string;
  setState: (value: string) => void;
  options: string[];
  validate: (value: string) => void;
}

const Select: React.FC<selectProps> = ({
  state,
  setState,
  options,
  validate,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const errorMessage = validate(selectedValue);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setState(newValue);
  };
  return (
    <>
      <p>
        <label htmlFor="SelectReasonForContact">Reason For Contact</label>
        <select
          id="SelectReasonForContact"
          name="reasonForContact"
          value={state}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            choose the reason
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </p>
      {errorMessage !== undefined && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default Select;
