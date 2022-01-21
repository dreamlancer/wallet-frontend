import React from 'react'
import {Box, Container, Typography} from "@mui/material";
import Verification from "./Verification/Verification";
import Details from "./Details/Details";
import TwoFactorAuth from "./2FA/2FA";
import ChangePassword from "./ChangePassword/ChangePassword";

const Profile = () => {
    return (<Box sx={{flexGrow: 1}}>
        <Container maxWidth={"xl"}>
            <Typography variant={"h1"} component={"div"}
                        sx={{fontSize: "40px", fontFamily: "MuliBold", color: "#212121"}}>
                Profile
            </Typography>
            <Verification/>
            <Details/>
            <TwoFactorAuth/>
            <ChangePassword/>
        </Container>
    </Box>)
}

export default Profile