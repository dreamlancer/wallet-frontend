import React from 'react'
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import QRCode from 'qrcode.react';
import CFT from '../../../../assets/imgs/ethereum.png'
import USDT from '../../../../assets/imgs/tether.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {InputField} from "./style";

const Receive = () => {
    return (<Box sx={{flexGrow: 1}}>
        <Container maxWidth={"xl"}>
            <Typography variant={"h1"} component={"div"}
                        sx={{fontSize: "40px", fontFamily: "MuliBold"}}>Receive</Typography>
            <Grid container alignItems={"center"} sx={{mt: 4}}>
                <Grid item lg={2} xs={12}>
                    <QRCode
                        value="Hii, here is saif mohamed's QR code" size={128}/>,
                </Grid>
                <Grid item container lg={10} xs={12} spacing={2}>
                    <Grid item container xs={12} alignItems={"center"} spacing={1}>
                        <Grid item>
                            <img src={CFT} width={"32px"} alt=""/>
                        </Grid>
                        <Grid item>
                            <p>ETH</p>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems={"center"} spacing={1}>
                        <Grid item>
                            <InputField value={"1907dasd019273hzdgasd"} label={"ID"}/>
                        </Grid>
                        <Grid item>
                            <Button variant={"contained"} sx={{bgcolor: "#212121", color: "#fff"}} startIcon={<ContentCopyIcon />}>Copy</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* ============ ETH */}
            <Grid container alignItems={"center"} sx={{mt: 4}}>
                <Grid item lg={2} xs={12}>
                    <QRCode
                        value="Hii, here is saif mohamed's QR code" size={128}/>,
                </Grid>
                <Grid item container lg={10} xs={12} spacing={2}>
                    <Grid item container xs={12} alignItems={"center"} spacing={1}>
                        <Grid item>
                            <img src={CFT} width={"32px"} alt=""/>
                        </Grid>
                        <Grid item>
                            <p>ETH</p>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems={"center"} spacing={1}>
                        <Grid item>
                            <InputField value={"1907dasd019273hzdgasd"} label={"ID"}/>
                        </Grid>
                        <Grid item>
                            <Button variant={"contained"} sx={{bgcolor: "#212121", color: "#fff"}} startIcon={<ContentCopyIcon />}>Copy</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container alignItems={"center"} sx={{mt: 4}}>
                <Grid item lg={2} xs={12}>
                    <QRCode
                        value="Hii, here is saif mohamed's QR code" size={128}/>,
                </Grid>
                {/* ============ USDT */}
                <Grid item container lg={10} xs={12} spacing={2}>
                    <Grid item container xs={12} alignItems={"center"} spacing={1}>
                        <Grid item>
                            <img src={USDT} width={"32px"} alt=""/>
                        </Grid>
                        <Grid item>
                            <p>USDT</p>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems={"center"} spacing={1}>
                        <Grid item>
                            <InputField value={"1907dasd019273hzdgasd"} label={"ID"}/>
                        </Grid>
                        <Grid item>
                            <Button variant={"contained"} sx={{bgcolor: "#212121", color: "#fff"}} startIcon={<ContentCopyIcon />}>Copy</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>)
}
export default Receive