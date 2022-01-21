import {Box, Grid, Stack, Typography} from "@mui/material";
import React from "react";

import WalletImage from "../../../assets/imgs/Cash-flash-image-wallet@2x.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {ContainerStyle, WalletButton} from "./style";

const WalletList = [
    {content: "Trade Bitcoin, Ethereum and CFT."},
    {
        content:
            "Save money with easy way to transfer cash between crypto exchanges/wallets.",
    },
    {
        content:
            "Personalize your wallet by adding Token information and cryptocurrency pairings.",
    },
    {content: "Simple and secure storage of your cryptocurrency."},
    {content: "QR code scaning makes transactions fast and easy."},
    {content: "Get instant notifications."},
];
const Wallet = () => {
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            direction={{xs: "column-reverse", lg: "row"}}
            sx={ContainerStyle}
        >
            <Grid
                item
                container
                xs={12}
                lg={6}
                sx={{py: {xs: 3, lg: 6}, px: {xs: 3, lg: 16}}}
                alignItems="start"
                justifyContent="center"
                direction="column"
            >
                <Typography
                    variant="h1"
                    color="initial"
                    sx={{
                        fontSize: "40px",
                        fontFamily: "MuliBold",
                        color: "text.primary",
                        fontWeight: "500",
                        mb: 4,
                    }}
                >
                    Wallet
                </Typography>
                <Box sx={{display: "flex", flexDirection: "column", gap: "12px"}}>
                    {WalletList.map((item, index) => (
                        <Stack direction="row" alignItems="center" key={index}>
                            <ArrowRightIcon fontSize="large" sx={{color: "#D0D0D0"}}/>
                            <Typography
                                variant="h1"
                                color="initial"
                                sx={{
                                    fontSize: "16px",
                                    fontFamily: "NotoSans",
                                    color: "#54595F",
                                    fontWeight: "500",
                                }}
                            >
                                {item.content}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
                <WalletButton>Learn More</WalletButton>
            </Grid>
            <Grid item xs={12} lg={6}>
                <img src={WalletImage} width="100%" alt=""/>
            </Grid>
        </Grid>
    );
};

export default Wallet;
