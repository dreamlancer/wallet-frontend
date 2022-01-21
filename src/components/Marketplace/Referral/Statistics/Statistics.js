import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import Card from "./Card/Card";
import Share from '@mui/icons-material/Share'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';

const CardDetails = [
    {title: "Personal Invitation Send", icon: <Share/>, value: '10'},
    {title: "My bonuses", icon: <MonetizationOnIcon/>, value: '10'},
    {title: "My referrals", icon: <GroupIcon/>, value: '10'},
]
const Statistics = () => {
    return (
        <Box sx={{flexGrow: 1, mt: 4}}>
            <Grid container>
                <Grid itemx xs={12}>
                    <Typography variant={"h1"} component={"div"}
                                sx={{fontSize: "25px", fontFamily: "MuliBold", color: "#212121"}}>
                        Statistics
                    </Typography>
                </Grid>
                <Grid itemx xs={12} container sx={{mt: 2}} spacing={2}>
                    {CardDetails.map(card => (
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <Card data={card}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )

}

export default Statistics