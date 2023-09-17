import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface selectProps {
  options: string[];
  validate: (value: string) => void;
}

const Select: React.FC<selectProps> = ({ options, validate }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const errorMessage = validate(selectedValue);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      {" "}
      <p>
        <label htmlFor="SelectReasonForContact">ReasonForContact</label>
        <select
          id="SelectReasonForContact"
          name="reasonForContact"
          value={selectedValue}
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
