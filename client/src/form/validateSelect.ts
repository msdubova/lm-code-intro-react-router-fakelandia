const validateSelect: (value: string) => string[] = (value) => {
  const errors = [];

  if (!value) {
    errors.push("Please select a reason.");
  }

  return errors;
};

export default validateSelect;
