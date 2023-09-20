import React, { useEffect, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { emojies } from "../../types/misdemeanours.types";
// import { MISDEMEANOURS } from "../../types/misdemeanours.types";
const Misdemeanours: React.FC = () => {
  const [cases, setCases] = useState<Array<Misdemeanour>>();
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState("");
  // let extandableCases = [...MISDEMEANOURS];

  const AMOUNT = 5;

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
            <div>
              <svg
                x="0px"
                y="0px"
                width="80px"
                height="80px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
              >
                <path
                  opacity="0.2"
                  fill="#000"
                  d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                />
                <path
                  fill="#000"
                  d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
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
