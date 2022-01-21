import { Button, styled } from "@mui/material";

export const ContainerStyle = {
  position: "relative",
  py: 6,
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "transparent linear-gradient(116deg, #7B7B7B 0%, #212121 100%) 0% 0% no-repeat padding-box",
};
export const TitleStyle = {
  fontSize: { xs: "24px", lg: "30px" },
  color: "#FEE934",
  textAlign: { xs: "center", lg: "start" },
  fontFamily: "MuliBold",
  lineHeight: { xs: "35px", lg: "40px" },
};
export const SubTitleStyle = {
  fontSize: { xs: "18px", lg: "20px" },
  color: "#fff",
  textAlign: { xs: "center", lg: "start" },
  lineHeight: { xs: "25px", lg: "30px" },
  fontFamily: "NotoSans",
  fontWeight: "500",
  my: { xs: 2, lg: 4 },
};
export const BannerButton = styled(Button)({
  background: "#FEE934 0% 0% no-repeat padding-box",
  boxShadow: "0px 8px 16px #36363626",
  borderRadius: "1000px",
  color: "#212121",
  fontFamily: "NotoSans",
  fontWeight: "600",
  padding: "12px 24px",
  textTransform: "capitalize",
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
});
