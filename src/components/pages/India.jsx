import { Grid, Typography } from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import apiHost from "../data/apiHost";
import MyResponsivePie from "../PieChart";
import StateDataCard from "../StateDataCard";

const India = () => {
  useEffect(() => {
    fetchIndia();
  });
  const [data, setData] = useState({});
  const [graphData, setGraphData] = useState([]);
  const [gridData, setGridData] = useState([]);

  const fetchIndia = async () => {
    try {
      const results = await fetch(`${apiHost}/latest`);
      const {
        total,
        confirmedCasesIndian,
        confirmedCasesForeign,
        discharged,
        deaths,
      } = await results.json();

      setData(() => ({
        total: total,
        active:
          confirmedCasesIndian + confirmedCasesForeign - discharged - deaths,
        deaths: deaths,
        recovered: discharged,
      }));

      setGraphData([
        {
          id: "active",
          label: "active",
          value: data.active,
          color: red[500],
        },
        {
          id: "deaths",
          label: "deaths",
          value: data.deaths,
          color: grey[500],
        },
      ]);

      setGridData([
        {
          id: "total",
          label: "total",
          value: data.total,
          color: blue[500],
        },
        {
          id: "recovered",
          label: "recovered",
          value: data.recovered,
          color: green[500],
        },
        ...graphData,
      ]);
    } catch (err) {
      console.log({ Error: err });
    }
  };

  return (
    <div className="home-page">
      <Typography variant="h3">Current Status of COVID-19 in India</Typography>
      <Grid className="home-grid" container spacing={2}>
        <Grid container spacing={1} className="grid-box" xs="12" md="6">
          {gridData.map((item) => (
            <Grid style={{height: "fit-content"}} item xs={6} md={12} key={item.label}>
              <StateDataCard  
                name={item.label}
                value={item.value}
                color={item.color}
              />
            </Grid>
          ))}
        </Grid>
        <Grid className="grid-box" xs="12" md="6">
          <MyResponsivePie data={graphData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default India;
