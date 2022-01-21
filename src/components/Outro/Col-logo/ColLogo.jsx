import {Box, Grid, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "../Logo";
import {FirstRowText, SocialIcons} from "../style";
import {FiLinkedin, FiFacebook, FiTwitter} from 'react-icons/fi';

const ColLogo = () => {
    return (
        <Grid item lg={3} sm={6} xs={12}>
            <Logo/>
            <Typography variant="h1" component="div" sx={FirstRowText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2} sx={{mt: 4}}>
                <Box sx={SocialIcons}>
                    <FiLinkedin/>
                </Box>
                <Box sx={SocialIcons}>
                    <FiFacebook/>
                </Box>
                <Box sx={SocialIcons}>
                    <FiTwitter/>
                </Box>
            </Stack>
        </Grid>
    );
};

export default ColLogo;
