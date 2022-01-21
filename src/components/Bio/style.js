import { Button, styled } from "@mui/material";
import NeuronsImg from "../../assets/imgs/Groupe de masques 6@2x.png";

export const NeuronsStyle = {
  display: { xs: "none", lg: "block" },
  position: "absolute",
  width: "95%",
  top: "-25px",
  left: "0",
  zIndex: "0",
};
export const BoxBackg = {
  width:"100vw",
  // backgroundSize: "cover",
};
export const LeftContentContainer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: { xs: "12px", lg: "12px 48px" },

  justifyContent: "center",
};
export const TitleStyle = {
  fontSize: "30px",
  display: "flex",
  lineHeight: "50px",
  flexDirection: "column",
  color: "#FBF7F8",
  fontFamily: "MuliBold",
};
export const SubTitleStyle = {
  fontSize: "24px",
  lineHeight: "30px",
  mt: 2,
  color: "#B3B3B3",
  fontFamily: "NotoSans",
  fontWeight: "600",
};
export const StartButton = styled(Button)({
  background: "#FEE934 0% 0% no-repeat padding-box",
  boxShadow: "0px 8px 16px #FEE93434",
  borderRadius: "1000px",
  color: "#212121",
  fontFamily: "NotoSans",
  fontWeight: "600",
  textTransform: "capitalize",
  padding: "12px 24px",
  fontSize: "16px",
  marginTop: "32px",
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
export const RightContentContainer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: { xs: "12px", lg: "12px 48px" },
  maxWidth: { xs: "100%", lg: "630px" },
  justifyContent: "center",
};
export const RightTitle = {
  fontSize: { xs: "24px", lg: "30px" },
  fontFamily: "MuliBold",
  color: "#212121",
};
export const RightSubTitle = {
  mt: 2,
  lineHeight: "30px",
  fontSize: { xs: "14px", lg: "18px" },
  fontFamily: "NotoSans",
  fontWeight: "500",
  color: "#54595F",
};
export const PlayButton = styled(Button)({
  background: "linear-gradient(90deg,#0048A8,#0063E6)",
  boxShadow: "0px 8px 16px #004baf34",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  width: "70px",
  height: "70px",
  fontSize: "36px",
  marginTop: "32px",
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
