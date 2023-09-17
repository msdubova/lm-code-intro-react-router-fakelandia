import { useState } from "react";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Textarea from "./Textarea";

import validateInput from "./validateInput";
import validateSelect from "./validateSelect";
import validateTextarea from "./validateTextarea";

const Form: React.FC = () => {
  const [inputSubject, setInputSubject] = useState("Confession");
  const [confessMessage, setConfessMessage] = useState(
    "Please write your message here"
  );
  const [reasonSelect, setReasonSelect] = useState("");
  const reasons = [
    "Manchester United fan",
    "Talk too much in lift",
    "Very rude",
    "I just want to talk",
  ];

  const isFormValid = (): boolean => {
    const subjectValidation = validateInput(inputSubject);
    const reasonValidation = validateSelect(reasonSelect);
    const messageValidation = validateTextarea(confessMessage);

    return (
      subjectValidation.length === 0 &&
      reasonValidation.length === 0 &&
      messageValidation.length === 0
    );
  };

  return (
    <form>
      <legend>
        <p>
          It's very difficult to catch people committing misdemeanors, so we
          appreciate it when citizens confess to us directly.
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
      <Select
        state={reasonSelect}
        setState={setReasonSelect}
        options={reasons}
        validate={validateSelect}
      />
      <Textarea
        state={confessMessage}
        setState={setConfessMessage}
        validate={validateTextarea}
      />

      <Button isValid={isFormValid()} />
    </form>
  );
};

export default Form;
