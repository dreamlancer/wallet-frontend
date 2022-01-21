import {Paper, styled, TextField} from "@mui/material";
import NeuronsBackg from '../../../../assets/imgs/referral-card-background.png'


export const SharePaper = styled(Paper)({
    marginTop: '32px',
    flexGrow: 1,
    backgroundColor: "#F7F7F7",
    padding: "24px 0 0 24px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundImage: `url(${NeuronsBackg})`,
    backgroundSize: "cover",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
})

export const CardTitle = {
    fontSize: "30px",
    color: "#212121",
    fontFamily: "MuliBold",
    mb: 2,
}
export const CardSubTitle = {
    fontSize: "16px",
    color: "#212121",
    fontFamily: "NotoSans"
}

export const CopyButton = styled(TextField)({
    width: "100%", flexGrow: 1,
    "& label": {
        fontFamily: "MuliBold", textTransform: "capitalize"
    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#EBEBEB",
        borderRadius: "10px",
        color: "#54595F",
        border: "none",
        fontSize: "18px",
        boxShadow: "inset 0px 3px 6px #00000029",
        fontFamily: "NotoSans",
        fontWeight: "500",
        maxWidth: "440px",
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