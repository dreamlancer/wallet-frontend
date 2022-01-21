import React from 'react'
import {Grid, Paper, Stack, Typography} from "@mui/material";

const Verification = () => {
    return (
        <Grid container alignItems={"center"} spacing={1} sx={{mt: 2}}>
            <Grid item lg={3} xs={12}>
                <Paper elevation={2} sx={UserPaper}>
                    <Stack direction={"column"} spacing={2}>
                        <Typography sx={Username}>SAIFMOHAMED</Typography>
                        <Typography sx={Email}>1920hj123asd</Typography>
                        <Typography sx={Email}>horeyatm@gmail.com</Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item lg={9} xs={12}>
                <Paper elevation={2} sx={StatusPaper}>
                    <Typography sx={Status}>Not Verified</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Verification


const UserPaper = {
    p: 2,
    borderRadius: "8px",
    background: "transparent linear-gradient(233deg, #FAFAFA 0%, #F0F0F0 100%) 0% 0% no-repeat padding-box",
    minHeight: "200px",
    height: "100%",
}
const StatusPaper = {
    p: 2,
    borderRadius: "8px",
    background: "#fff",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const Username = {
    fontSize: "22px",
    fontFamily: "MuliBold",
    color: "#212121"
}
const Email = {
    fontSize: "16px",
    fontFamily: "NotoSans",
    color: "#212121",
    fontWeight: "Regular"
}
const Status = {
    fontSize: "24px",
    fontFamily: "NotoSans",
    color: "#F22727",
    fontWeight: "Regular"
}