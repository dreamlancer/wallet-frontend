import {Button, styled, Typography} from "@mui/material";

export const NavButton = styled(Button)({
    color: "#212121",
    marginBottom: "1.2rem",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "0 30px 30px 0",
    padding: "12px 24px",
    fontFamily: "MuliBold",
    textTransform: "capitalize",
    fontSize: "1rem",
    ".MuiButton-endIcon": {
        flexGrow: 1,
        textAlign: "end",
        display:"flex",
        alignItems:"cener",
        justifyContent:"end",
        margin: "0",
    },
    "&:hover": {
        backgroundColor: "#fee934",
        color: "#212121",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#fee934",
        color: "#212121",
        borderColor: "#005cbf",
    },
    "&:focus": {
        backgroundColor: "#fee934",
        color: "#212121",
    },
})

export const UserName = styled(Typography)({
    fontSize: "24px",
    fontFamily: "MuliBold",
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    margin: "0 16px",
    gap: "12px",

})