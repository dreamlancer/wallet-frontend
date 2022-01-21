import React from 'react'
import {Grid, Stack, styled, TextField, Typography} from "@mui/material";

const Shipment = () => {
    return (<Grid item container xs={12} spacing={4}>
            <Grid item container lg={6} xs={12} spacing={2}>
                <Grid item xs={12}>
                    <p>Wallet Address*</p>
                    <InputField label={"Enter Wallet Address"}/>
                </Grid>
                <Grid item xs={12}>
                    <p>Amount CFT*</p>
                    <InputField label={"Enter Amount"}/>
                </Grid>
            </Grid>
            <Grid item container lg={6} xs={12}>
                <Grid item xs={12}>
                    <h2>Shipment Summary</h2>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"}
                           spacing={2}>
                        <Typography variant={"h1"} component={"div"}
                                    sx={{
                                        fontSize: "16px", fontFamily: "MuliBold", color: '#54595F'
                                    }}>Quantity:</Typography>
                        <Typography variant={"h1"} component={"div"}
                                    sx={{
                                        fontSize: "16px", fontFamily: "NotoSans", color: '#54595F'
                                    }}>10000</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"}
                           spacing={2}>
                        <Typography variant={"h1"} component={"div"}
                                    sx={{
                                        fontSize: "16px", fontFamily: "MuliBold", color: '#54595F'
                                    }}>Amount:</Typography>
                        <Typography variant={"h1"} component={"div"}
                                    sx={{
                                        fontSize: "16px", fontFamily: "NotoSans", color: '#54595F'
                                    }}>0,123 CFT</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>)
}
export default Shipment


const InputField = styled(TextField)({
    width: "100%", flexGrow: 1, "& label": {
        color: "#54595F", fontFamily: "NotoSans"
    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#fff",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
        fontWeight: "NotoSans",
        width: "100%",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {
            border: "1px solid #D6D6D6",
        },
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});