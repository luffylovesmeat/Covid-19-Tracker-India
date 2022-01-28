import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { blue, green, red } from "@mui/material/colors";
import numberFormat from "../numberFormat";

const StateCard = (props) => {
  const { name, active, total, recovered } = props;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 1 }} color={red[500]}>
          Active Cases: {numberFormat(active)}
        </Typography>
        <Typography variant="body2">
          {name} has currently{" "}
          <Typography variant="string" color={green[500]}>
            {numberFormat(recovered)}
          </Typography>{" "}
          recovered cases of{" "}
          <Typography variant="string" color={blue[500]}>
            {numberFormat(total)}
          </Typography>{" "}
          total cases.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/states/${name}`} className="link">
          <Button size="medium">Learn More</Button>
        </Link>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }} className="card">
      <Card variant="outlined" className="card-content">
        {card}
      </Card>
    </Box>
  );
};

export default StateCard;
