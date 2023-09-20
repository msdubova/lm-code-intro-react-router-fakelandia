import { useState } from "react";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Textarea from "./Textarea";

import validateInput from "./validateInput";
import validateSelect from "./validateSelect";
import validateTextarea from "./validateTextarea";
import { MISDEMEANOURS, JUST_TALK } from "../../types/misdemeanours.types";
const ConfessForm: React.FC = () => {
  const [inputSubject, setInputSubject] = useState("Confession");
  const [confessMessage, setConfessMessage] = useState(
    "Please write your message here"
  );
  const [reasonSelect, setReasonSelect] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      subject: inputSubject,
      reason: reasonSelect,
      details: confessMessage,
    };

    try {
      const response = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && reasonSelect !== "just-talk") {
          console.log(data);
        }
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      console.log("Error while sending request", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        options={[...MISDEMEANOURS, JUST_TALK]}
        validate={validateSelect}
      />
      <Textarea
        state={confessMessage}
        setState={setConfessMessage}
        validate={validateTextarea}
      />

      <Button isValid={isFormValid()} onSubmit={handleSubmit} />
    </form>
  );
};

export default ConfessForm;
