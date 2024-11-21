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
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "@mui/material/Badge";
import {
  faHouse,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";


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
  <Box>Hi</Box>  
  );
}

export default DashHeader;
