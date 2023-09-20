import { count } from "../../form/ConfessForm";
const Counter: React.FC = () => {
  return <p className="score">Total confessions for today: {count}</p>;
};

export default Counter;
