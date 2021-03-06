import { blue, green, grey, red } from "@mui/material/colors";
import React from "react";
import MyResponsivePie from "./PieChart";
import StateDataCard from "./StateDataCard";
import { Grid } from "@mui/material";

const StateData = (props) => {
  const graphData = [
    {
      id: "active",
      label: "active",
      value: props.active,
      color: red[500],
    },
    {
      id: "deaths",
      label: "deaths",
      value: props.deaths,
      color: grey[500],
    },
  ];
  const cardData = [
    ...graphData,
    {
      id: "recovered",
      label: "recovered",
      value: props.recovered,
      color: green[500],
    },
    {
      id: "total",
      label: "total",
      value: props.total,
      color: blue[500],
    },
  ];
  return (
    <div className="state-card">
      <MyResponsivePie data={graphData} />
      <Grid className="state-info-grid" container spacing={2}>
        {cardData.map((data) => (
          <Grid item md={3} xs={6} key={data.label}>
            <StateDataCard
              name={data.label}
              value={data.value}
              color={data.color}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StateData;
