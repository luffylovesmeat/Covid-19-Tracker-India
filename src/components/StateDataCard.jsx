import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as _ from "lodash";
import numberFormat from "../numberFormat";


const StateDataCard = (props) => {
  const { name, value, color } = props;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {_.startCase(_.camelCase(name))}
        </Typography>
        <Typography variant="body2" color={color}>
            {numberFormat(value)}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return <Card variant="outlined">{card}</Card>;
};
export default StateDataCard;
