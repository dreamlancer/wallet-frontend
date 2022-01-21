import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Market from "./Market/Market";
import Wallet from "./Wallet/Wallet";
const Wallmart = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 0 }}>
      <Wallet />
      <Market />
    </Box>
  );
};

export default Wallmart;
