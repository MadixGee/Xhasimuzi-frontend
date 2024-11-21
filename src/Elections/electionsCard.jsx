import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Modal,
  ClickAwayListener,
} from "@mui/material";
import { smallBtns } from "../assets/components/Styles";
import { useNavigate } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Badge from "@mui/material/Badge";
import { faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IEC from "../assets/IEC.jpg";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

function Card({ title, type, startDate, endDate, voterTurnout, status }) {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(true);

  function handleDetails() {
    navigate("/funder_details");
  }
  function handleRequests() {
    navigate("/funderApplications");
  }
  const [logOutModal, setLoggedOutModal] = useState(false);
  function handleLogoutClose() {
    setLoggedOutModal(false);
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        padding: "1.2rem",
        alignItems: "center",
        border: "1px solid #F1CEB4",
        display: visibility ? "flex" : "none",
      }}
    >
      <Grid item xs={8}>
        <img src={IEC} alt="Vote" />
        <Typography sx={{ fontSize: "18px" }}>Title:{title}</Typography>
        <Typography sx={{ fontSize: "12px", color: "#F07402" }}>
          Type: {type}
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Start Date: {startDate}
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>End Date: {endDate}</Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Voter Turnout: {voterTurnout}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#F07402" }}>
          Status: {status}
        </Typography>
      </Grid>
    </Grid>
  );
}

const serviceIndustryStyle = {
  borderRadius: "20px",
  border: "1px solid #DD7D32",
  backgroundColor: "#FFE3CC",
  color: "#DD7D32",
  padding: "0.25rem",
};

export default Card;
