import { Box, Paper, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  ContentPaper,
  ContentTitle,
  DatePaper,
  DateTitle,
  DescPaper,
  DescTitle,
} from "./style";
const Card = ({ data }) => {
  return (
    <Grid item lg={3} md={6} xs={12}>
      <Stack direction="column" alignItems="center">
        <DatePaper>
          <Typography variant="h6" component="div" sx={DateTitle}>
            {data.date}
          </Typography>
        </DatePaper>
        <DescPaper>
          <Typography variant="h6" component="div" sx={DescTitle}>
            {data.title}
          </Typography>
        </DescPaper>
        <ContentPaper>
          <Typography variant="h6" component="div" sx={ContentTitle}>
            {data.content}
          </Typography>
        </ContentPaper>
      </Stack>
    </Grid>
  );
};

export default Card;
