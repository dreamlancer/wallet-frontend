import React from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";
import ReferralImage from "../../../../assets/imgs/Purcheses copie@2x.png";

function BuyCard(props) {
    return (<Paper sx={PaperStyle}>
        <Grid container>
            <Grid item lg={8} md={6} sm={6}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} component={"div"} sx={CardTitle}>Buy CFT Tokens</Typography>
                    <Box sx={UnderLine}></Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h1"} component={"div"} sx={CardSubTitle}>and get extra CFT tokens in 3 months
                        according to the following scheme</Typography>

                </Grid>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6}>
                <img src={ReferralImage} height={"100%"} width={"100%"}/>
            </Grid>
        </Grid>
    </Paper>);
}

export default BuyCard;


const PaperStyle = {
    marginTop: '32px',
    flexGrow: 1,
    background: "transparent linear-gradient(102deg, #F7F7F7 0%, #E6E6E6 100%) 0% 0% no-repeat padding-box",
    padding: "24px 48px",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    "&:hover": {
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
    }
}

const UnderLine = {
    background: "transparent linear-gradient(180deg, #FEE934 0%, #FEC034 100%) 0% 0% no-repeat padding-box",
    width: "75px",
    borderRadius: "8px",
    height: "5px",
}
const CardTitle = {
    fontSize: "30px",
    color: "#212121",
    fontFamily: "MuliBold",
    mb: 2,
}
const CardSubTitle = {
    fontSize: "22px",
    color: "#212121",
    mt: 2,
    fontFamily: "NotoSans",
    maxWidth: "400px",
}