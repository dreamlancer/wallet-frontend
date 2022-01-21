import { Paper, styled } from "@mui/material";

export const DatePaper = styled(Paper)({
  "&.MuiPaper-root": {
    padding: "12px 12px 24px 12px",
    textAlign: "center",
    width: "50%",
    borderRadius: "0",
    background: "#212121 ",
  },
});
export const DescPaper = styled(Paper)({
  "&.MuiPaper-root": {
    padding: "8px",
    textAlign: "center",
    width: "40%",
    marginTop: "-12px",
    borderRadius: "4px",
    zIndex: "4",
    background: "#fee934 ",
  },
});
export const ContentPaper = styled(Paper)({
  "&.MuiPaper-root": {
    padding: "48px 12px 24px 12px",
    textAlign: "start",
    width: "100%",
    marginTop: "-32px",
    borderRadius: "4px",
    background: "rgba(251, 247, 248, 0.88) ",
    minHeight: "200px",
  },
});
export const DateTitle = {
  fontSize: "14px",
  fontFamily: "NotoSans",
  fontWeight: "500",
  color: "#fff",
};
export const DescTitle = {
  fontSize: "16px",
  fontFamily: "NotoSans",
  fontWeight: "500",
  color: "#212121",
};
export const ContentTitle = {
  fontSize: "14px",
  fontFamily: "NotoSans",
  color: "#54595F",
  lineHeight: "25px",
};
