import React from 'react'
import {Box, Button, Grid, Paper, styled, Typography} from "@mui/material";
import {PaperStyle} from "../Details/style";
import GoogleAuth from '../../../../assets/imgs/googleAuth.png'

const TwoFactorAuth = () => {
    return (<Paper elevation={0} sx={PaperStyle}>
        <Box sx={{flexGrow: 1}}>
            <Typography sx={{color: "#212121", fontFamily: "MuliBold", fontSize: "40px",}}>2FA</Typography>
            <Grid container xs={12} spacing={2} sx={{mt: 2}}>
                <Grid item container xs={6} spacing={4} alignItems={"center"}>
                    <Grid item>
                        <img width={"70px"} src={GoogleAuth} alt=""/>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant={"h1"} component={"div"} sx={TitleStyle}>
                                Google Authenticator
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h1"} component={"div"} sx={SubTitle}>One-Time Password
                                application</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={3} spacing={2} alignItems={"center"}>
                    <Grid item>
                        <Grid item>
                            <Typography variant={"h1"} component={"div"} sx={TitleStyle}>
                                Status
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h1"} component={"div"} sx={SubTitle}>
                                Disabled
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={3} spacing={2} alignItems={"center"}>
                    <Grid item>
                        <EnableButton>Enable</EnableButton>
                    </Grid>

                </Grid>

            </Grid>
        </Box>
    </Paper>)

}
export default TwoFactorAuth

const TitleStyle = {
    fontSize: "16px", fontWeight: "600", fontFamily: "NotoSans", color: "#212121", mb: 2
}
const SubTitle = {
    fontSize: "16px", fontWeight: "500", fontFamily: "NotoSans", color: "#212121"
}
const EnableButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    fontWeight: "600",
    padding: "12px 24px",
    textTransform: "capitalize",
    fontSize: "16px",
    width: "100%",
    "&:hover": {
        backgroundColor: "#212121", color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box", color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, 0.4)",
    },
});