import React from 'react';
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import ReferralImage from "../../../../assets/imgs/offer.png";
import BACKG
    from "../../../../assets/imgs/global-network-connection-communication-technology-global-network-global-world-network-and-telecommunication-on-earth-cryptocurrency-and-blockchain-an@2x.png";

function OfferCard(props) {
    return (<Box sx={PaperStyle} display={"flex"} alignItems={"center"}>
        <Container maxWidth={"xl"}>
            <Grid container>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} component={"div"} sx={CardTitle}>Special Offer</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} component={"div"} sx={CardSubTitle}>Hurry up! Get your extra tokens
                            right now.</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={6} justifyContent={"center"}>
                    <Grid item container xs={12} alignItems={"flex-end"} justifyContent={"flex-end"}>
                        <Typography variant={"h1"} component={"div"} sx={Upto}>UP TO</Typography>
                    </Grid>
                    <Grid item container xs={12} alignItems={"flex-end"} justifyContent={"flex-end"}>
                        <Typography variant={"h1"} component={"div"} sx={Percentage}>25%</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>);
}

export default OfferCard;


const PaperStyle = {
    marginTop: '32px',
    flexGrow: 1,
    background: `transparent url(${ReferralImage}) 0% 0% no-repeat padding-box`,
    padding: "24px",
    borderRadius: "8px",
    overflow: "hidden",
    minHeight: "140px",
    cursor: "pointer",
    backgroundSize: "cover",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    "&:hover": {
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
    }
}
const Upto = {
    fontSize: "20px",
    color: "#212121",
    fontFamily: "NotoSans"
}
const Percentage = {
    fontSize: "72px",
    color: "#212121",
    fontFamily: "MuliBold"
}
const CardTitle = {
    fontSize: "30px", color: "#212121", fontFamily: "MuliBold", mb: 2,
}
const CardSubTitle = {
    fontSize: "22px", color: "#212121", mt: 2, fontFamily: "NotoSans",
}