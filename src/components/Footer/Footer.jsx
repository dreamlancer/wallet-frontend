import { Box, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Links } from "./style";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#212121", py: 4 }}>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#fff" }}
          >
            © All rights reserved for CashFlash UAB
          </Typography>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Link sx={Links}>Privacy Policy</Link>
            <Link sx={Links}>Terms of Service</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
