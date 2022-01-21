import {Button, styled, TextField} from "@mui/material";

export const InputField = styled(TextField)({
    width: "100%", flexGrow: 1,
    "& label": {
        fontFamily: "MuliBold", textTransform: "capitalize"
    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#fff",
        borderRadius: "10px",
        color: "#54595F",
        border: "none",
        fontSize: "18px",
        boxShadow: "inset 0px 3px 6px #00000029",
        fontFamily: "NotoSans",
        fontWeight: "500",
        width: "100%",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {
            border: "1px solid #D6D6D6"
            ,
        },
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});
export const TextArea = styled(TextField)({
    width: "100%", flexGrow: 1,
    "& label": {
        fontFamily: "MuliBold", textTransform: "capitalize"
    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#fff",
        borderRadius: "10px",
        color: "#54595F",
        border: "none",
        fontSize: "18px",
        boxShadow: "inset 0px 3px 6px #00000029",
        fontFamily: "NotoSans",
        fontWeight: "500",
        minHeight: "120px",
        width: "100%",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {
            border: "1px solid #D6D6D6"
            ,
        },
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});

export const SendButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    fontWeight: "600",
    padding: "12px 24px",
    fontSize: "16px",
    marginTop: '12px',
    textTransform:"capitalize",
    minWidth: "340px",
    "&:hover": {
        backgroundColor: "#212121",
        color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box",
        color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
    },
});