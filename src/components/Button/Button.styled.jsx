import { styled as muiStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export const StylesButton = muiStyled(Button)(({ theme, width, height }) => ({
  width: width,
  height: height,
  padding: "12px 0 12px 0",
  borderRadius: "12px",
  color: theme.palette.getContrastText("#3470FF"),
  backgroundColor: "#3470FF",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#0B44CD",
    boxShadow: "none",
  },
}));

export const Text = styled.span`
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;
