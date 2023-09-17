import { useEffect, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { emojies } from "../../types/misdemeanours.types";

const Misdemeanours: React.FC = () => {
  const [cases, setCases] = useState<Array<Misdemeanour>>();

  useEffect(() => {
    const getCases = async () => {
      const data = await fetch("http://localhost:8080/api/misdemeanours/3");
      data.json().then((json) => {
        setCases(json.misdemeanours);
      });
    };
    getCases();
  }, []);
  return (
    <>
      <p>{cases === undefined && "Loading..."}</p>
      {cases && (
        <table>
          <tbody>
            <tr>
              <th>Citizen ID</th>
              <th>Date</th>
              <th>Misdemeanour</th>
              <th>Punishment idea</th>
            </tr>
            {cases.map((caseItem) => (
              <tr key={caseItem.citizenId}>
                <td>{caseItem.citizenId}</td>
                <td>{caseItem.date}</td>
                <td>
                  {emojies[caseItem.misdemeanour]} {caseItem.misdemeanour}
                </td>
                <td>
                  <img
                    src={`https://picsum.photos/190/100?random=${Math.random()}`}
                    alt="punishment idea"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Misdemeanours;
