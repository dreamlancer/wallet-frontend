import React from 'react'
import {Button, Grid, Paper, styled, TextField, Typography} from "@mui/material";
import {ChangeButton, InputField, LabelsStyle, PaperStyle} from "./style";

const ChangePassword = () => {
    return (<Paper elevation={0} sx={PaperStyle}>
        <Typography variant={"h4"} component={"div"}>Change Password</Typography>
        <Grid container sx={{mt: 4}} spacing={2}>
            <Grid item xs={12}>
                <label for="" style={LabelsStyle}>Current Password*</label>
                <InputField placeholder={"current password"}/>
            </Grid>
            <Grid item container xs={12} spacing={6}>
                <Grid item>
                    <label for="" style={LabelsStyle}>New Password*</label>
                    <InputField placeholder={"New Password"}/>
                </Grid>
                <Grid item>
                    <label for="" style={LabelsStyle}>Repeat New Password*</label>
                    <InputField placeholder={"confirm New Password"}/>
                </Grid>
                <Grid item xs={12}>
                    <ChangeButton>Change</ChangeButton>
                </Grid>
            </Grid>
        </Grid>
    </Paper>)
}

export default ChangePassword





