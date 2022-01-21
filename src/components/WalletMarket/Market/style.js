import { Button, styled } from "@mui/material";

export const ContainerStyle = {
  minHeight: "250px",
  bgcolor: "#FBF7F8",
  py: { xs: 2, lg: 0 },
};
export const WalletButton = styled(Button)({
  background: "#212121 0% 0% no-repeat padding-box",
  boxShadow: "0px 8px 16px #36363626",
  borderRadius: "1000px",
  color: "#Fee934",
  fontFamily: "NotoSans",
  fontWeight: "600",
  padding: "12px 24px",
  textTransform: "capitalize",
  fontSize: "16px",
  marginTop: "24px",
  "&:hover": {
    backgroundColor: "#fee934",
    color: "#212121",
  },
  "&:active": {
    background: "#212121 0% 0% no-repeat padding-box",
    color: "#fee934",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
  },
});
