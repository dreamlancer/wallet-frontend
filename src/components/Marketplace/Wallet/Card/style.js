import {Button, Paper, styled} from "@mui/material";

export const CardContainer = styled(Paper)({
    background: "#FBF7F8",
    padding: "24px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    "&:hover": {
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    }
})
export const CoinName = {
    fontSize: "24px",
    fontFamily: "MuliBold",
    color: "#212121",
    textTransform: "uppercase",
}
export const CoinNumber = {
    fontSize: "24px",
    fontFamily: "NotoSans",
    fontWeight: "600"

}
export const CoinPrice = {
    fontSize: "16px",
    fontFamily: "NotoSans",

}

export const CardButtonSend = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    textTransform: "capitalize",
    fontWeight: "600",
    maxWidth: "100px",
    width: "100%",
    fontSize: "16px",
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
})

export const CardButtonReceive = styled(Button)({
    background: "#212121 0% 0% no-repeat padding-box",
    borderRadius: "1000px",
    color: "#fff",
    fontFamily: "NotoSans",
    textTransform: "capitalize",
    fontWeight: "600",
    maxWidth: "100px",
    width: "100%",
    fontSize: "16px",
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
})