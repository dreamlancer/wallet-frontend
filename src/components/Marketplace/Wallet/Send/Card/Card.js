import React from 'react'
import {Grid, Paper, Typography} from "@mui/material";
import CoinIcon from "../../../../../assets/imgs/ethereum.png";
import {CoinNumber} from "../../Card/style";


const SendCard = () => {
    return (
        <Grid item container xs={12} sx={{mt: 4}}>
            <Paper elevation={3} sx={{flexGrow: 1, p: 2, bgcolor: "#FBF7F8"}}>
                <Grid item container xs={12} spacing={2} alignItems={"center"}>
                    <Grid item container xs={6} alignItems={"center"} spacing={2}>
                        <Grid item>
                            <img src={CoinIcon} width={"32px"} alt=""/>
                        </Grid>
                        <Grid item>
                            <h1>CFT</h1>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} alignItems={"flex-end"} justifyContent={"flex-end"}>
                        <Typography sx={CoinNumber}>1000.00</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2} alignItems={"center"}>
                    <Grid item container xs={6} alignItems={"center"}>
                        <Typography sx={CoinNumber}>1 CFT = 0.123123EUR</Typography>
                    </Grid>
                    <Grid item container xs={6} alignItems={"flex-end"} justifyContent={"flex-end"}>
                        <Typography sx={CoinNumber}>$5,000.00 EUR</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default SendCard