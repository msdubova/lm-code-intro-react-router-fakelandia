import React, { useEffect, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { emojies } from "../../types/misdemeanours.types";
import Loader from "./Helpers/Loader";
// import { MISDEMEANOURS } from "../../types/misdemeanours.types";
const Misdemeanours: React.FC = () => {
  const [cases, setCases] = useState<Array<Misdemeanour>>();
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState("");
  // let extandableCases = [...MISDEMEANOURS];

  const AMOUNT = 3;

  useEffect(() => {
    const getCases = async () => {
      const data = await fetch(
        `http://localhost:8080/api/misdemeanours/${AMOUNT}`
      );
      data.json().then((json) => {
        setCases(json.misdemeanours);
      });
    };
    getCases();
  }, []);

  return (
    <div className="container">
      <div>
        <label>Filter by Misdemeanour:</label>
        <select
          value={selectedMisdemeanour}
          onChange={(e) => setSelectedMisdemeanour(e.target.value)}
        >
          <option value="">All</option>
          <option value="rudeness">Mild Public Rudeness</option>
          <option value="lift">Speaking in a Lift</option>
          <option value="vegetables">Not Eating Your Vegetables</option>
          <option value="united">Supporting Manchester United</option>
        </select>
      </div>

      <p>
        {cases === undefined && (
          <>
            Loading...
            <Loader />
          </>
        )}
      </p>
      {cases && (
        <table>
          <tbody>
            <tr>
              <th>Citizen ID</th>
              <th>Date</th>
              <th>Misdemeanour</th>
              <th>Punishment idea</th>
            </tr>
            {cases
              .filter((caseItem) =>
                selectedMisdemeanour
                  ? caseItem.misdemeanour === selectedMisdemeanour
                  : true
              )
              .map((caseItem) => (
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
    </div>
  );
};

export default Misdemeanours;
