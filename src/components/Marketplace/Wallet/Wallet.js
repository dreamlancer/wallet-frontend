import React from 'react'
import {Box, Breadcrumbs, Container, Grid, Link, Typography} from "@mui/material";
import {PageTitle} from "./style";
import Card from "./Card/Card";
import BasicTable from "./Table/Table";

const Wallet = () => {
    return (
        // <Box sx={{flexGrow: 1}}>
            <Container maxWidth={"xl"}>
                <Grid item container>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} component={"div"} sx={PageTitle}>Wallet</Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{mt: 4}} spacing={2}>
                        {[1, 2, 3].map(res => (
                            <Grid item lg={4} md={6} xs={12}>
                                <Card/>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item container xs={12} sx={{mt: 4}} spacing={2}>
                        <BasicTable/>
                    </Grid>
                </Grid>
            </Container>
        // </Box>
    )
}

export default Wallet