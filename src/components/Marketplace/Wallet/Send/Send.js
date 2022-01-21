import React from 'react'
import {Box, Button, Container, Grid, Stack, styled, TextField, Typography} from "@mui/material";
import SendCard from "./Card/Card";
import RadioButtons from "./RadioButtons/RadioButtons";
import Shipment from "./Shipment/Shipment";


const Send = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <Container maxWidth={"xl"}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} component={"div"}
                                    sx={{fontSize: "40px", fontFamily: "MuliBold"}}>Send</Typography>
                    </Grid>
                    <SendCard/>
                    <RadioButtons/>
                    <Shipment/>
                    <Stack direction={{xs: "column", lg: "row"}} spacing={2} alignItems={"center"}
                           justifyContent={"center"}
                           sx={{flexGrow: 1, mt: 4}}>
                        <SendButton>send</SendButton>
                        <CancelButton>cancel</CancelButton>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    )
}

export default Send


const SendButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    fontWeight: "600",
    textTransform: "capitalize",
    padding: "12px 24px",
    fontSize: "16px",
    width: "100%",
    "&:hover": {
        backgroundColor: "#212121",
        color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box",
        color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
    },
});
const CancelButton = styled(Button)({
    background: "#A3A3A3 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#fff",
    fontFamily: "NotoSans",
    textTransform: "capitalize",
    fontWeight: "600",
    padding: "12px 24px",
    fontSize: "16px",
    width: "100%",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#A3a3a3",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box",
        color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
    },
});