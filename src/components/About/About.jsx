import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ContainerStyle, Paragraph, SubTitle, Title } from "./style";
import CoinImage from "../../assets/imgs/Cash-flash-image-coin@2x.png";
const About = () => {
  return (
    <Box sx={ContainerStyle} id="We Are">
      <Container maxWidth="xl" sx={{ overflowY: "hidden" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            container
            lg={6}
            xs={12}
            alignItems="center"
            justifyContent="center"
            sx={{ overflowY: "hidden" }}
          >
            <img src={CoinImage} width="75%" alt="" />
          </Grid>
          <Grid item container lg={6} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={Title}>
                What's Cash Flash
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={SubTitle}>
                We are creating the first project with its real Certified and
                Guaranteed Marketplace.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={Paragraph}>
                The Cash Flash project was born with the intent to create a
                series of systems for both the customer and companies,
                incorporated in the first marketplace where it will be possible
                to buy everything in cryptocurrency. All stores will be able to
                use it as a means of payment with a dedicated POS. Furthermore,
                through Cash Flash Technology it will be possible to trace the
                products and counteract their counterfeiting.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
