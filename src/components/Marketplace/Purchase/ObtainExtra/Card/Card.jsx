import React from "react";
import {Grid, Typography} from "@mui/material";
import {CardExtra, CardTitle, StatsCard} from "./style";
import CLogo from "./CLogo";

const Card = ({data}) => {
    return (
        <StatsCard elevation={0}>
            <Grid
                container
                spacing={2}
            >
                <Grid item container xs={6} spacing={2}>
                    <Grid item xs={12}>
                        <CLogo/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} component={"div"} sx={CardExtra}>Obtain extra</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={6} spacing={2}>
                    <Grid item container justifyContent={"flex-end"} xs={12}>
                        <Typography variant={"h1"} component={"div"} sx={CardTitle}>1,001 - 10,000 USDT</Typography>
                    </Grid>
                    <Grid item container justifyContent={"flex-end"} xs={12}>
                        <Typography variant={"h1"} component={"div"} sx={CardTitle}>15% CFT</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </StatsCard>
    );
};

export default Card;
