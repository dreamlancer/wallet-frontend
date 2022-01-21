import {styled, TextField} from "@mui/material";

export const InputField = styled(TextField)({
    width: "100%", flexGrow: 1, "& label": {
        color: "#54595F", fontFamily: "NotoSans"
    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#fff",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
        fontWeight: "NotoSans",
        maxWidth: "300px",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {
            border: "1px solid #D6D6D6",
        },
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});