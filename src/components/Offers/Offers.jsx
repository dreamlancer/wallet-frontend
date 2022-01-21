import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { TitleStyle, SubTitleStyle } from "./style";
import Card from "./Card/Card";

const CardDetails = [
  { from: "1€", to: "1,000€", extraToken: "5%" },
  { from: "1€", to: "1,000€", extraToken: "5%" },
  { from: "1€", to: "1,000€", extraToken: "5%" },
  { from: "1€", to: "1,000€", extraToken: "5%" },
];

const Offers = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 6, bgcolor: "#FBF7F8" }} id="Offers">
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h1" componenet="div" sx={TitleStyle}>
              Offers
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" componenet="div" sx={SubTitleStyle}>
              Buy CFT tokens and get extra CFT tokens in 3 months according to
              the following scheme:
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {CardDetails.map((card) => (
              <Grid item lg={3} md={6} xs={12}>
                <Card data={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Offers;
