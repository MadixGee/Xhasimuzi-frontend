import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")({
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  backgroundColor: "#fff",
  marginLeft: 0,
  width: "40%",
  paddingLeft: "1.5rem",
  fontFamily: "Helvetica, Arial, sans-serif",
});

export const Heading = styled("p")({
  color: "#9C948D",
  fontSize: "10px",
  fontFamily: "Helvetica, Arial, sans-serif",
});

export const StyledInputBase = styled(InputBase)({
  color: "inherit",
  width: "100%",
  marginTop: "-0.5rem",
  padding: "0",
});

export const Categories = styled("h5")({
  color: "#9C948D",
  width: "100%",
  margin: "0",
  marginTop: "-0.5rem",
  fontWeight: "normal",
  maxWidth:"150px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
