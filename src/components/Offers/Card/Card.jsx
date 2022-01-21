import React from "react";
import { Grid, Typography } from "@mui/material";
import { CardExtra, CardTitle, StatsCard } from "./style";
import CLogo from "./CLogo";

const Card = ({ data }) => {
  return (
    <StatsCard elevation={0}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h1" component="div" sx={CardTitle}>
            {data.from} to {data.to}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CLogo />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" component="div" sx={CardExtra}>
            Extra Token{" "}
            <span style={{ fontFamily: "MuliBold" }}>{data.extraToken}</span>
          </Typography>
        </Grid>
      </Grid>
    </StatsCard>
  );
};

export default Card;
