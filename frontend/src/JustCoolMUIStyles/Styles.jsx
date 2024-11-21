import {
    MenuItem,
    Select,
    TextField,
    InputBase,
    InputLabel,
  } from "@mui/material";
  import { alpha, styled } from "@mui/material/styles";
  
  export const InputFieldForm = styled(InputBase)(({ theme }) => ({
    borderRadius: "20px",
    border: "1px solid ",
    marginTop: "1.4rem",
    width: "auto",
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
    paddingTop: "3px",
    paddingBottom: "3px",
    // borderColor:"1px solid #FBF9F9"
    "& input": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
    },
  }));
  
  export const StyledSelect = styled(Select)(({ theme }) => ({
    borderRadius: "20px",
    border: "1px solid #000",
    marginTop: "1.4rem",
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
  }));
  
  export const TextFieldResults = styled(TextField)(({ theme }) => ({
    borderRadius: "20px",
    border: "1px solid #000",
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
  }));
  
  export const TextFieldStyle = styled(TextField)(({ theme }) => ({
    borderRadius: "20px",
    border: "1px solid #000",
    marginTop: "1.4rem",
    width: "auto",
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
    paddingTop: "0",
    paddingBottom: "0",
  }));
  
  export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    // Your custom MenuItem styles here
    // Change color to blue, for example
    // Override hover styles
    borderStyle: "none",
    "&:hover": {
      textDecoration: "none", // Remove underline
      backgroundColor: "rgba(0, 0, 0, 0.04)", // Change background color on hover
    },
  }));
  