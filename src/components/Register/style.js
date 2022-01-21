import Image from '../../assets/imgs/person.png'
import {Button, styled, TextField} from "@mui/material";
import BACKG
    from '../../assets/imgs/loginBackg.png'

export const ContainerStyle = {
    flexGrow: 1,
    bgcolor: "#fff",
    minHeight: "100vh",
    py: 4,
    background: `url(${BACKG}) no-repeat`,
    backgroundSize: "cover",
    display: "flex", alignItems: "center", justifyContent: "center",
}
export const BoxStyle = {
    position: "relative",
    maxWidth: {xs: "90%", lg: "1000px"},
    borderRadius: "20px",
    bgcolor: "rgba(84, 89, 95,.3)",
    height: "100%",
    boxShadow: "8px 16px 32px #0000001A",
    backdropFilter: "blur(8px)",
}

export const RightImage = {
    // minHeight: "600px",
    height: "available",
    flexGrow: 1,
    width: "100%",
    background: `url(${Image}) no-repeat center center`,
    backgroundSize: "cover",
    borderRadius: "0 24px 24px 0",
}
export const Title = {
    fontSize: "35px",
    color: "#EEEEEE",
    textTransform: "capitalize",
    fontFamily: "MuliBold",
    dropShadow: "0px 4px 12px #fee9341A",

}
export const NewUserStyle = {
    fontSize: "16px",
    color: "#EEEEEE",
    textTransform: "capitalize",
    fontFamily: "MuliBold",
    display: "flex",
    gap: "12px",
}

export const InputField = styled(TextField)({
    width: "100%",
    "& label": {
        color: "#fff", fontFamily: "NotoSans"
    }, "& label.Mui-focused": {
        color: "#fff",
    }, '& .MuiOutlinedInput-root': {
        background: "rgba(33, 33, 33,.2)",
        borderRadius: "14px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "NotoSans",
        width: "100%",
        backdropFilter: "blur(6px)",
        '& fieldset': {
            border: "none",
        },
        '&:hover fieldset': {
            border: "2px solid", borderColor: '#fee934',
        },
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#fee934',
        },
    },
});


export const SignInButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    textTransform:"capitalize",
    fontWeight: "600",
    padding: "12px 48px",
    width: "100%",
    fontSize: "16px",
    "&:hover": {
        backgroundColor: "#212121", color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box", color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
    },
});

export const OrStick = {
    width: "100px",
    height: "2px",
    background: "#32323c"
}
export const ORSignin = {
    fontSize: "14px",
    color: "#fff",
    fontFamily: "MuliBold"
}


export const IconCircle = {
    width: "48px",
    height: "48px",
    background: "#2F2F2F",
    color: "#fee934",
    borderRadius: "50%",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all ease-in-out .4s",
    "&:hover": {
        background: "#fee834",
        color: "#2F2F2F",
    }
}


export const Info = {
    fontSize: "16px",
    color: "#fff",
    textAlign: "center",
    fontFamily: "MuliBold",
    fontWeight: "600",
}