import React from 'react'
import {Box, Paper} from "@mui/material";
import {PaperStyle} from "./style";
import TopBar from "./TopBar";
import Form from "./Form";
import TwoFactorAuth from "../2FA/2FA";

const Details = () => {
    return (
        <Paper elevation={0} sx={PaperStyle}>
            <Box sx={{maxWidth: "80%"}}>
                <TopBar/>
                <Form />
            </Box>
        </Paper>
    )
}
export default Details

