import React, { useEffect, useState } from "react";
import { smallBtns } from "../assets/components/Styles";
import {
  Container,
  Box,
  Stack,
  List,
  ListItemText,
  ListItem,
  ClickAwayListener,
  Modal,
  Typography,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  IconButton,
  Grid,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "@mui/material/Badge";
import {
  faHouse,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import votingLogo from "../assets/votingLogo.jpg";
import { useNavigate } from "react-router-dom";

function DashHeader() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const [loggedOut, setLoggedOut] = useState(false);
  const [logOutModal, setLoggedOutModal] = useState(false);

  function handleBackHome() {
    navigate("/dashboard");
  }

  return (
    <Box
      sx={{
        marginLeft: "15px",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={votingLogo} />
        <Typography
          sx={{ fontWeight: "bold", fontSize: "30px", marginLeft: "12px" }}
        >
          Politec
        </Typography>
        <FontAwesomeIcon
          icon={faHouse}
          style={{
            color: "#41675c",
            fontSize: "35px",
            marginLeft: "15px",
          }}
        />
      </Box>
      <Box sx={{ marginRight: "20px" }}>
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{
            color: "#41675c",
            fontSize: "35px",
          }}
        />
      </Box>
    </Box>
  );
}

export default DashHeader;
