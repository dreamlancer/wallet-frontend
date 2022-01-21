import React from 'react'
import {Box, Container, Typography} from "@mui/material";
import {TitleStyle} from "./style";
import ShareCard from "./ShareCard/ShareCard";
import Statistics from "./Statistics/Statistics";
import Invite from "./Invite/Invite";


const Referral = () => {
    return (<Box sx={{flexGrow: 1}}>
        <Container maxWidth={"xl"}>
            <Typography variant={"h1"} component={"div"}
                        sx={TitleStyle}>
                Referral
            </Typography>
            <ShareCard/>
            <Statistics/>
            <Invite/>
        </Container>
    </Box>)
}

export default Referral