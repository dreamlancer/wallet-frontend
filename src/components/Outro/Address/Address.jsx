import React from "react";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {AddressTitle, ContainerStyle} from "../style";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import coinMarket from '../../../assets/imgs/coinmarketcap.png'
import coingecko from '../../../assets/imgs/coingecko.png'

const Address = () => {
    return (
        <Grid item lg={3} sm={6} xs={12}>
            <Typography variant="h1" component="div" sx={AddressTitle}>
                <RoomIcon/> CashFlash UAB, <br/>
                <br/> Didžioji st. 18, <br/>
                <br/> Vilnius 01128, <br/>
                <br/> Lithuania
            </Typography>
            <Typography variant="h1" component="div" sx={{...AddressTitle, mt: 2}}>
                <MailOutlineIcon/>
                info@cashflash.io
            </Typography>
            <img width={"130px"} sx={{mt: 2}} src={coinMarket}/>
            <img width={"130px"} sx={{mt: 2}} src={coingecko}/>
        </Grid>
    );
};

export default Address;
