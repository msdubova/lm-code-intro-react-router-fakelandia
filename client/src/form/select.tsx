const Select: React.FC = () => {
  return (
    <p>
      <label htmlFor="SelectReasonForContact">ReasonForContact</label>
      <select id="SelectReasonForContact" name="reasonForContact">
        <option value="" disabled>
          choose the reason
        </option>
        <option value="dontEatVegetables">Don't eat vegetables</option>
        <option value="manchesterUnitedFan">Manchester United fan</option>
        <option value="talkTooMuchInLift">Talk too much in lift</option>
        <option value="veryRude">Very rude</option>
        <option value="justWantToTalk">I want to talk</option>
      </select>
    </p>
  );
};

export default Select;
