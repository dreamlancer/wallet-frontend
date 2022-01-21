import { Paper, styled } from "@mui/material";

export const StatsCard = styled(Paper)({
  boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
  "&.MuiPaper-root": {
    padding: "12px",
    borderRadius: "8px",
    borderTop: "6px solid #FEE934",
  },
});

export const CardTitle = {
  fontSize: "16px",
  color: "#212121",
  fontFamily: "MuliBold",
};
export const CardExtra = {
  fontSize: "16px",
  color: "#212121",
  fontFamily: "NotoSans",
};
