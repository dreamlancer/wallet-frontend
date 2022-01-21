import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Card from "./Card/Card";

function OptainExtra(props) {
    return (
        <Box sx={{flexGrow: 1, mt: 4}}>
            <Container maxWidth={"xl"}>
                <Grid container spacing={4}>
                    {[1, 2, 3, 4].map(card => (
                        <Grid item xs={6}>
                            <Card/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default OptainExtra;