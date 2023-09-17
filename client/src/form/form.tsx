import Input from "./input";
import Select from "./select";
import Button from "./button";

const Form: React.FC = () => {
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
      <Input />
      <Select />
      <Button />
    </form>
  );
};

export default Form;
