import { Button, styled } from "@mui/material";
export const ContainerStyle = {
  flexGrow: 1,
  minHeight: "60vh",
  background: "#212121",
  p: 4,
};
export const Title = {
  fontSize: "40px",
  color: "#fff",
  textAlign: { xs: "center", lg: "start" },
  fontFamily: "MuliBold",
};
export const SubTitle = {
  fontSize: "20px",
  color: "#FFFFFF",
  fontFamily: "NotoSans",
  textAlign: { xs: "center", lg: "start" },
  mt: 2,
  mb: 3,
  lineHeight: "30px",
};
export const Paragraph = {
  fontSize: "16px",
  color: "#D0D0D0",
  textAlign: { xs: "center", lg: "start" },
  lineHeight: "25px",
  fontFamily: "NotoSans",
};
export const FlagTitle = {
  fontSize: "16px",
  color: "#FFF",
  fontFamily: "NotoSans",
  fontWeight: "500",
};

export const DownloadButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    fontWeight: "600",
    padding: "12px 32px",
    textTransform: "capitalize",
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