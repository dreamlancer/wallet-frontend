import React from 'react'
import {Box, Grid, styled, TextField, Typography} from "@mui/material";

const TopBar = () => {
    return (
        <Grid container spacing={4} alignItems={"center"} justifyContent={"center"} sx={{mt: 2}}>
            <Grid item container xs={6} alignItems={"center"} justifyContent={"center"}>
                <Typography variant={"h1"} component={"div"} sx={Title}>
                    From your CFT wallet
                </Typography>
                <Box sx={YellowStick}> </Box>

            </Grid>
            <Grid item container xs={6} alignItems={"center"} justifyContent={"center"}>
                <Typography variant={"h1"} component={"div"} sx={Title}>
                    ETH/USDT
                </Typography>
                <Box sx={YellowStick}> </Box>
            </Grid>
        </Grid>
    )
}

export default TopBar


const Title = {
    fontSize: "24px",
    // width: "150px",
    fontFamily: "MuliBold",
    display: "flex",
    mb: 2,
    flexDirection: "column",
    gap: "8px",
    textAlign: "center",
}
const YellowStick = {
    height: "8px", width: "100%", bgcolor: "#fee934", borderRadius: "0 0 10px 10px"
}