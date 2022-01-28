import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StateData from "../StateData";
import apiHost from "../data/apiHost";

const State = () => {
  useEffect(() => {
    fetchStates();
  });

  const [data, setData] = useState({
    loc: "",
    confirmedCasesIndian: "",
    confirmedCasesForeign: "",
    discharged: "",
    deaths: "",
  });
  const { stateName } = useParams();
  const {
    loc,
    confirmedCasesIndian,
    confirmedCasesForeign,
    discharged,
    deaths,
  } = data;

  const fetchStates = async () => {
    try {
      const results = await fetch(`${apiHost}/state`);
      const stateArr = await results.json();
      stateArr.forEach((state) => {
        if (state.loc === stateName) setData(state);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="state-page">
      <Typography variant="h3" color={grey[500]}>
        {data.loc}
      </Typography>
      <StateData
        name={loc}
        active={
          confirmedCasesIndian + confirmedCasesForeign - discharged - deaths
        }
        total={confirmedCasesIndian + confirmedCasesForeign}
        recovered={discharged}
        deaths={deaths}
      />
    </div>
  );
};

export default State;
