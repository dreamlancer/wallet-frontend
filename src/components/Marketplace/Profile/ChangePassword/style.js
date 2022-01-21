import {Button, styled, TextField} from "@mui/material";

export const LabelsStyle = {
    fontSize: "16px",
    fontFamily: "NotoSans",
    marginBottom: "12px",
    color: "#212121",
    fontWeight: "600"
}
export const PaperStyle = {
    p: 4, borderRadius: "8px", mt: 4, boxShadow: "3px 3px 8px #00000029",
}
export const InputField = styled(TextField)({
    width: "100%", flexGrow: 1, marginTop: "12px", "& label": {
        color: "#54595F", fontFamily: "MuliBold", textTransform: "capitalize"

    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#fff",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
        boxShadow: "inset 0px 3px 6px #00000029",
        fontWeight: "NotoSans",
        minWidth: "340px",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {border: "1px solid #D6D6D6",},
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});

export const ChangeButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    textTransform: "capitalize",
    fontWeight: "600",
    padding: "12px 24px",
    fontSize: "16px",
    minWidth: "340px",
    "&:hover": {
        backgroundColor: "#212121", color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box", color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, 0.4)",
    },
});