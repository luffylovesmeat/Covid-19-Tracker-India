import React, { useState, useEffect } from "react";
import StateCard from "../StateCard";
import apiHost from "../data/apiHost";

const StateWise = () => {
  useEffect(() => {
    fetchStates();
  }, []);

  const [data, setData] = useState([]);

  const fetchStates = async () => {
    const results = await fetch(`${apiHost}/state`);
    const statesArr = await results.json();
    setData(statesArr);
  };
  return (
    <div className="cards">
      {data.map((state) => {
        const {
          loc,
          confirmedCasesIndian,
          confirmedCasesForeign,
          discharged,
          deaths,
        } = state;
        return (
          <StateCard
            key={loc}
            name={loc}
            active={
              confirmedCasesIndian + confirmedCasesForeign - discharged - deaths
            }
            recovered={discharged}
            total={confirmedCasesIndian}
          />
        );
      })}
    </div>
  );
};

export default StateWise;
