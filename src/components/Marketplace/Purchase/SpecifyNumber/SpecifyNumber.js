import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import {PaperStyle, TitleStyle} from "./style";
import TopBar from "./TopBar/TopBar";
import Form from "./Form/Form";

function SpecifyNumber(props) {
    return (<Paper sx={PaperStyle}>
        <Typography variant={"h1"} component={"div"} sx={TitleStyle}>
            Specify A Number
        </Typography>
        <TopBar/>
        <Form/>
    </Paper>);
}

export default SpecifyNumber;