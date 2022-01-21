import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {InputField, SendButton, TextArea} from "./style";

function Invite(props) {
    return (
        <Box sx={{flexGrow: 1, mt: 4}}>
            <Typography variant={"h1"} component={"div"} sx={{fontSize: "24px", fontFamily: "MuliBold"}}>
                Invite your friends
            </Typography>
            <Stack direction={"column"} alignItems={"start"} sx={{mt: 2}}>
                <Typography variant={"h1"} component={"div"} sx={{fontSize: "16px", fontFamily: "MuliBold", mb: 1}}>
                    Email*
                </Typography>
                <InputField placeholder={"Your Email..."}/>
            </Stack>
            <Stack direction={"column"} alignItems={"start"} sx={{mt: 2}}>
                <Typography variant={"h1"} component={"div"} sx={{fontSize: "16px", fontFamily: "MuliBold", mb: 1}}>
                    Message
                </Typography>
                <TextArea placeholder={"Example:  Hi, my dear friend!..."} multiline/>
            </Stack>
            <SendButton>
                Send
            </SendButton>
        </Box>
    )
        ;
}

export default Invite;