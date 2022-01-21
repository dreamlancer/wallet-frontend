import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Banner from "../../assets/imgs/banner-image.png";
import {
  BannerButton,
  ContainerStyle,
  SubTitleStyle,
  TitleStyle,
} from "./style";
const Hero = ({ navH }) => {
  return (
    <Box sx={{ ...ContainerStyle, minHeight: `calc(100vh - ${navH})` }}>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 12, lg: 4 }}
        >
          <Grid item xs={12} lg={6}>
            <Grid
              item
              container
              direction={"column"}
              maxWidth="500px"
              sx={{
                px: { xs: 3, lg: 0 },
              }}
              alignItems={{ xs: "center", lg: "flex-start" }}
            >
              <Typography component="div" variant="h1" sx={TitleStyle}>
                Introducing the World’s First Blockchain-Based Marketplace
              </Typography>
              <Typography component="div" variant="h1" sx={SubTitleStyle}>
                We Empower Ecommerce with Blockchain to be more efficient,
                transparent and less costly
              </Typography>
              <BannerButton>Learn More</BannerButton>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img src={Banner} style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
