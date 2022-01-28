import React, { useEffect, useState } from "react";
import apiHost from "../data/apiHost";

const India = () => {
  useEffect(() => {
    fetchIndia();
  }, []);
  const [data, setData] = useState({});

  const fetchIndia = async () => {
    try {
      const results = await fetch(`${apiHost}/latest`);
      const { total, confirmedCasesIndian, discharged, deaths } =
        await results.json();
      setData(() => ({
        total: total,
        active: confirmedCasesIndian - discharged - deaths,
        deaths: deaths,
        recovered: discharged,
      }));
    } catch (err) {
      console.log({ Error: err });
    }
  };

  return (
    <div>
      <h1>Current Status of COVID-19 in India</h1>
      <p>Total {Object.keys(data).length && data.total}</p>
      <p>Active {Object.keys(data).length && data.active}</p>
      <p>Recovered {Object.keys(data).length && data.recovered}</p>
      <p>Deaths {Object.keys(data).length && data.deaths}</p>
    </div>
  );
};

export default India;
