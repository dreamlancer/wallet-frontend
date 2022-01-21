import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Neurons from "./Neurons";
import NeuronsImg from "../../assets/imgs/Groupe de masques 6@2x.png";
import { FaPlay } from "react-icons/fa";
import PPlogo from "./P2P";
import {
  StartButton,
  LeftContentContainer,
  NeuronsStyle,
  SubTitleStyle,
  TitleStyle,
  RightTitle,
  RightContentContainer,
  RightSubTitle,
  PlayButton,
  BoxBackg,
} from "./style";
import Video from "./VideoPopup/Video";

const BioBar = () => {
  const [youtube, setYoutube] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ position: "relative", overflow: "hidden" }}>
        <Box sx={NeuronsStyle}>
          <img
            src={NeuronsImg}
            width="100%"
            style={{ marginBottom: "24px" }}
            alt=""
          />
        </Box>
        <Grid
          item
          container
          lg={6}
          xs={12}
          sx={{ bgcolor: "secondary.main", p: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={LeftContentContainer}>
            <Typography variant="h1" component="div" sx={TitleStyle}>
              Trade on
              <PPlogo />
            </Typography>
            <Typography variant="h1" component="div" sx={SubTitleStyle}>
              New opportunities in cryptocurrencies
            </Typography>
            <StartButton>Start Now</StartButton>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12} sx={{ bgcolor: "primary.main", p: 3 }}>
          <Box sx={RightContentContainer}>
            <Typography variant="h1" component="div" sx={RightTitle}>
              Secure, instant payments in any cryptocurrency
            </Typography>
            <Typography variant="h1" component="div" sx={RightSubTitle}>
              We are always looking for ways to improve the user experience and
              make transactions easier. That’s why our l mobile app allows you
              more flexibility in your daily life!
            </Typography>
            <PlayButton
              onClick={() => {
                setYoutube(true);
              }}
            >
              <FaPlay fontSize="inherit" />
            </PlayButton>
            {youtube && <Video setYoutube={setYoutube} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BioBar;
