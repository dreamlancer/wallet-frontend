import React from 'react'
import {Box, Grid, Stack, styled, TextField, Typography} from "@mui/material";
import ManIcon from '@mui/icons-material/Man';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RoomIcon from '@mui/icons-material/Room';
const TopBar = () => {
    return (
        <Grid container spacing={4} alignItems={"center"} justifyContent={"center"}>
            <Grid item container lg={4} xs={12} spacing={1}>
                <Grid item container xs={12} alignItems={"center"} justifyContent={"center"}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                        <ManIcon/>
                        <Typography variant={"h1"} component={"div"} sx={Title}>
                            Person
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={YellowStick}> </Box>
                </Grid>
            </Grid>
            <Grid item container lg={4} xs={12} spacing={1}>
                <Grid item container xs={12} alignItems={"center"} justifyContent={"center"}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                        <InsertDriveFileIcon/>
                        <Typography variant={"h1"} component={"div"} sx={Title}>
                            Document
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={YellowStick}> </Box>
                </Grid>
            </Grid>
            <Grid item container lg={4} xs={12} spacing={1}>
                <Grid item container xs={12} alignItems={"center"} justifyContent={"center"}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                        <RoomIcon/>
                        <Typography variant={"h1"} component={"div"} sx={Title}>
                            Location
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={YellowStick}> </Box>
                </Grid>
            </Grid>
            {/*<Grid item>*/}
            {/*    <Typography variant={"h1"} component={"div"} sx={Title}>Document*/}
            {/*        <Box sx={YellowStick}> </Box>*/}
            {/*    </Typography>*/}
            {/*</Grid>*/}
            {/*<Grid item>*/}
            {/*    <Typography variant={"h1"} component={"div"} sx={Title}>Location*/}
            {/*        <Box sx={YellowStick}> </Box>*/}
            {/*    </Typography>*/}
            {/*</Grid>*/}
        </Grid>
    )
}

export default TopBar


const Title = {
    fontSize: "24px",
    width: "150px",
    fontFamily: "MuliBold",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "center",
}
const YellowStick = {
    height: "8px", width: "100%", bgcolor: "#fee934", borderRadius: "0 0 10px 10px"
}