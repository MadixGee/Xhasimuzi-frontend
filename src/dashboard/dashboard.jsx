import DashHeader from "./dashHeader.jsx"
import {
  Grid,
  useMediaQuery,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Dashboard() {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          //alignItems: "center",
          marginTop: "12rem",
          gap: "25px",
          marginLeft: "16.5rem",
        }}
      >
        <button
          style={{
            padding: "80px",
            border: "1px solid #F07402",
            borderRadius: "15px",
            width: "250px",
            height: "200px",
            backgroundColor: "#fff",
          }}
        >
          {" "}
          <Typography
            sx={{ color: "#41675C", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Elections
          </Typography>
        </button>
        <button
          style={{
            padding: "40px",
            border: "1px solid #F07402",
            borderRadius: "15px",
            width: "250px",
            height: "200px",
            backgroundColor: "#fff",
          }}
        >
          {" "}
          <Typography
            sx={{ color: "#41675C", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Political Parties
          </Typography>
        </button>
        <button
          style={{
            padding: "80px",
            border: "1px solid #F07402",
            borderRadius: "15px",
            width: "250px",
            height: "200px",
            backgroundColor: "#fff",
          }}
        >
          {" "}
          <Typography
            sx={{ color: "#41675C", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Candidates
          </Typography>
        </button>
      </Grid>
    </>
  );
}
export default Dashboard;
