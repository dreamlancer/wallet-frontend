import React from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import Share from '@mui/icons-material/Share'

function Card({data}) {
    return (<Paper elevation={0} sx={PaperStyle}>
            <Box sx={{flexGrow: 1}}>
                <Stack direction={"row"} alignitems={"center"} justifyContent={"space-between"}>
                    {data.icon}
                    <Typography variant={"h1"} component={"div"}
                                sx={{fontSize: "24px", fontFamily: "MuliBold"}}>{data.value}</Typography>
                </Stack>
                <Typography variant={"h1"} component={"div"}
                            sx={{fontSize: "20px", fontFamily: "NotoSans", mt: 2}}>{data.title}</Typography>
            </Box>
        </Paper>);
}

export default Card;


const PaperStyle = {
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    minHeight: "80px",
    p: 2,
    minWidth: "270px",
    borderRadius: "10px",
    flexGrow: 1
}