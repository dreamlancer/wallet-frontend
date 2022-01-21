import {Box, Container, Grid, Link, Stack, Typography} from "@mui/material";
import React from "react";
import {AddressTitle, ContainerStyle, LinkStyle} from "./style";
import ColLogo from "./Col-logo/ColLogo";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Address from "./Address/Address";
import {useNavigate} from "react-router-dom";

const Outro = () => {
    const router = useNavigate();
    const Links = ["Offers", "Roadmap", "We Are", "White Paper"];
    const ExternalLinks = ["Market Place", "Account"];
    return (
        <Box sx={ContainerStyle}>
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="start" justifyContent="center">
                    <ColLogo/>
                    <Address/>
                    <Grid item container lg={3} sm={6} xs={12} spacing={3}>
                        {Links.map((link) => (
                            <Grid item lg={12}>
                                <Link href={`#${link}`} sx={LinkStyle}>
                                    {link}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item container lg={3} sm={6} xs={12} spacing={3}>
                        {ExternalLinks.map((link) => (
                            <Grid item lg={12}>
                                <Link onClick={() => {router(`${link}`)}} sx={LinkStyle}>
                                    {link}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Outro;
