const validateTextarea = (text: string): string[] => {
  const errors = [];

  if (text.length < 16 || text.length > 200) {
    errors.push("Message must be between 16 and 200 characters.");
  }

  return errors;
};

export default validateTextarea;
