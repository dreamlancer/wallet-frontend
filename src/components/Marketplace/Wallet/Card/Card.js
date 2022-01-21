import React from 'react'
import {Button, Grid, Paper, Typography} from "@mui/material";
import {CardButtonReceive, CardButtonSend, CardContainer, CoinName, CoinNumber, CoinPrice} from "./style";
import CoinIcon from '../../../../assets/imgs/ethereum.png'
import {useNavigate} from "react-router-dom";

const Card = () => {
    const router = useNavigate()
    return (
        <CardContainer elevation={0}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img src={CoinIcon} width={"32px"} alt=""/>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={6}>
                        <Typography variant={'h1'} component={"div"} sx={CoinName}> CFT</Typography>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <Typography sx={CoinNumber}>1000.00</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={CoinPrice}>$50,000.00 EUR</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sx={{mt: 2}}>
                        <Grid item xs={6}>
                            <CardButtonSend onClick={() => {
                                router('send')
                            }}>Send</CardButtonSend>
                        </Grid>
                        <Grid item xs={6}>
                            <CardButtonReceive onClick={() => {
                                router('receive')
                            }}>Receive</CardButtonReceive>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContainer>
    )
}
export default Card