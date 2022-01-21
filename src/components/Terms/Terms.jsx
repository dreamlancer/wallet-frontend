import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ContainerStyle, DownloadButton, FlagTitle, Paragraph, SubTitle, Title } from "./style";
import WhitePaperImg from "../../assets/imgs/Cash-flash-image-white-paper@2x.png";
import EnglishFlag from "../../assets/imgs/englishflag.png";
import ItalianFlag from "../../assets/imgs/italianflag.png";
const Terms = () => {
  return (
    <Box sx={ContainerStyle} id="White Paper">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          alignItems="center"
          direction={{ xs: "column-reverse", lg: "row" }}
        >
          <Grid item container lg={6} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={Title}>
                White Paper
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={SubTitle}>
                Terms of service are rules by which you must agree to abide by
                to use a service. The terms of service may also simply be a
                disclaimer, particularly regarding the use of the websites.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={Paragraph}>
                Official company program viewable and downloadable in pdf,
                choose the language most convenient to you:
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={6}
              lg={3}
              direction="row"
              spacing={2}
              sx={{ mt: 2 }}
              alignItems="center"
            >
              <Grid item>
                <img src={EnglishFlag} width="32px" />
              </Grid>
              <Grid item>
                <Typography variant="h1" component="div" sx={FlagTitle}>
                  English
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={6}
              lg={3}
              direction="row"
              sx={{ mt: 2 }}
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <img src={ItalianFlag} width="32px" />
              </Grid>
              <Grid item>
                <Typography variant="h1" component="div" sx={FlagTitle}>
                  Italian
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
           <DownloadButton>Download</DownloadButton>
            </Grid>
          </Grid>
          <Grid
            item
            container
            lg={6}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <img src={WhitePaperImg} width="100%" alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Terms;
