import React from 'react'
import {Grid, InputAdornment, Typography} from "@mui/material";
import {CardSubTitle, CardTitle, CopyButton, SharePaper} from "./style";
import ReferralImage from '../../../../assets/imgs/Referral.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ShareCard = () => {
    return (<SharePaper elevation={0}>
        <Grid container>
            <Grid item lg={8} md={6} sm={6}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} component={"div"} sx={CardTitle}>Share what is worth
                        sharing</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h1"} component={"div"} sx={CardSubTitle}>This bonus is for you and your
                        friends</Typography>
                </Grid>
                <Grid item xs={12} sx={{mt: 4, mb: 2}}>
                    <Typography variant={"h1"} component={"div"} sx={CardSubTitle}>Your reward for each
                        referral</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h1"} component={"div"} sx={CardTitle}>10% of his purchase</Typography>
                </Grid>
                <Grid item xs={12} sx={{mt: 4}}>
                    <CopyButton value={"Cashflash.io.ref-876839n56a8739j"} InputProps={{
                        endAdornment: (<InputAdornment position="end">
                            <ContentCopyIcon cursor={"pointer"}/>
                        </InputAdornment>)
                    }}/>
                </Grid>
            </Grid>
            <Grid item lg={4} md={6} sm={6}>
                <img src={ReferralImage} height={"100%"} width={"100%"} />
            </Grid>
        </Grid>
    </SharePaper>)
}

export default ShareCard