import { useState } from "react";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

import validateInput from "./validateInput";
import validateSelect from "./validateSelect";

const Form: React.FC = () => {
  const [inputSubject, setInputSubject] = useState("");

  const reasons = [
    "Manchester United fan",
    "Talk too much in lift",
    "Very rude",
    "I just want to talk",
  ];

  return (
    <form>
      <legend>
        <p>
          It's very difficult to catch people committing misdemeanors, so we
          appreciate it when citizens confess to us directly.{" "}
        </p>
        <p>
          However, if you're just having a hard day and ready to vent, then
          you're welcome to contact us here too. It's up to you!
        </p>
      </legend>
      <Input
        state={inputSubject}
        setState={setInputSubject}
        validate={validateInput}
      />
      <Select options={reasons} validate={validateSelect} />
      <Button />
    </form>
  );
};

export default Form;
