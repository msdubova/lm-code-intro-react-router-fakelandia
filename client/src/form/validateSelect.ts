const validateSelect: (subject: string) => string[] = (subject) => {
    const errors = [];
  
    if (subject.length < 6 || subject.length > 100) {
      errors.push("Subject must be between 6 and 100 characters.");
    }
  
    return errors;
  };
  
  export default validateSelect;
  