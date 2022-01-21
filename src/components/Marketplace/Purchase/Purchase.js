import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {TitleStyle} from "./style";
import BuyCard from "./BuyCard/BuyCard";
import OfferCard from "./OfferCard/OfferCard";
import Card from "./ObtainExtra/Card/Card";
import OptainExtra from "./ObtainExtra/OptainExtra";
import SpecifyNumber from "./SpecifyNumber/SpecifyNumber";
import BasicTable from "./Table/Table";

function Purchase(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <Container maxWidth={'xl'}>
                <Typography variant={"h1"} component={"div"}
                            sx={TitleStyle}>
                    Purchase
                </Typography>
                <BuyCard/>
                <OfferCard/>
                <OptainExtra />
                <SpecifyNumber />
                <BasicTable />
            </Container>
        </Box>
    );
}

export default Purchase;