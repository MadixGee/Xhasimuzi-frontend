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
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ECAfricaLogo from "../assets/ECAfricaLogo.jpg";
import { useNavigate } from "react-router-dom";
import {
  getNoficationsForAllMyResources,
  getResourceQuoteFeedback,
} from "../utils/axios.js";
import FeedBackCard from "../FeedbackRequestResource/FeedBackCard.jsx";
import "./css/Menu.css";

function DashHeader() {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [isOpen, setOpen] = useState(false);

  const [loggedOut, setLoggedOut] = useState(false);
  const [logOutModal, setLoggedOutModal] = useState(false);

  function handleBackHome() {
    navigate("/business_dashboard");
  }
  function handleClickAway() {
    setOpen(false);
  }

  function handleLogoutClose() {
    setLoggedOutModal(false);
  }

  function handleLogout() {
    let iWantToLogout = false;
    if (cognitoUser) {
      cognitoUser.signOut(() => {
        sessionStorage.removeItem("userLoggedIn");
        localStorage.clear();
        setLoggedOut(true);
      });
    }
  }

  if (loggedOut) {
    window.location.reload();
    navigate("/");
  }

  const [responseForQuotes, setResponseForQuotes] = useState(0);
  const [feedback, setFeedback] = useState([]);
  const [rowsFeedback, setRowsFeedback] = useState([]);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(true);

  const toggleFeedbackVisibility = () => {
    setIsFeedbackVisible((prevVisibility) => !prevVisibility);
  };
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      // getResourceQuoteFeedback(userToken).then((response) => {
      //   if (response.status == 200) {
      //     const { data } = response;
      //     localStorage.setItem("feedbacks", JSON.stringify(data));
      //     const responseFeed = data.filter(
      //       (item) => item.Status === "accepted" || item.Status === "declined"
      //     );

      //     getNoficationsForAllMyResources().then((data) => {
      //       console.log(data);
      //     });
      //     setFeedback(responseFeed.reverse());
      //     setResponseForQuotes(responseFeed.length);
      //   }
      // });

      Promise.all([
        getNoficationsForAllMyResources(),
        getResourceQuoteFeedback(userToken),
      ])
        .then(([notificationsData, response]) => {
          if (response.status === 200) {
            const { data } = response;
            localStorage.setItem("feedbacks", JSON.stringify(data));

            // Filter response data
            const responseFeed = data.filter(
              (item) => item.Status === "accepted" || item.Status === "declined"
            );

            // Combine notifications data with filtered response data
            const combinedData = [...notificationsData, ...responseFeed];

            // Reverse the combined data and update the state
            setFeedback(combinedData.reverse());
            setResponseForQuotes(combinedData.length);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: isSmallScreen ? "center" : "flex-start",
            padding: isSmallScreen ? "0" : "20px",
            width: "100%",
          }}
        >
          {isSmallScreen ? (
            <>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: isSmallScreen ? "column" : "row",
                }}
              >
                {/* <img src={ECAfricaLogo} width={isSmallScreen ? 80 : 120} /> */}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "75%",
                  alignItems: "center",
                  marginTop: isSmallScreen ? "10px" : "2rem",
                }}
              >
                <IconButton
                  onClick={handleBackHome}
                  size={isSmallScreen ? "small" : "medium"}
                >
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{
                      color: "#41675c",
                      fontSize: isSmallScreen ? "16px" : "20px",
                    }}
                  />
                </IconButton>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Badge badgeContent={responseForQuotes} color="primary">
                        <FontAwesomeIcon
                          {...bindTrigger(popupState)}
                          icon={faBell}
                          style={{
                            color: "#41675c",
                            fontSize: isSmallScreen ? "16px" : "20px",
                            cursor: "pointer",
                          }}
                        />
                      </Badge>
                      <Menu {...bindMenu(popupState)} sx={{ padding: 0 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#41675C",
                            width: "350px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              margin: "0 auto",
                              color: "#fff",
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: "30px",
                              paddingBottom: "-25px",
                              paddingTop: "9%",
                            }}
                          >
                            Notifications
                          </Typography>
                          {isFeedbackVisible && (
                            <Box
                              sx={{
                                height: "65vh",
                                overflowY: "auto",
                                scrollbarWidth: "none", // For Firefox
                                msOverflowStyle: "none", // For Internet Explorer and Edge
                                "&::-webkit-scrollbar": {
                                  display: "none", // For Chrome, Safari, and Opera
                                },
                              }}
                            >
                              {feedback.map((resourceQ, index) => (
                                <FeedBackCard
                                  key={index}
                                  resourceId={resourceQ.ResourceId}
                                  title={resourceQ.title}
                                  description={resourceQ.description}
                                  Status={resourceQ.Status}
                                  quantity={resourceQ.quantity}
                                />
                              ))}
                            </Box>
                          )}

                          <FontAwesomeIcon
                            icon={
                              isFeedbackVisible ? faChevronUp : faChevronDown
                            }
                            style={{
                              color: "#fff",
                              fontSize: "35px",
                              cursor: "pointer",
                            }}
                            onClick={toggleFeedbackVisibility}
                          />
                        </Box>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                <Box>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <FontAwesomeIcon
                          {...bindTrigger(popupState)}
                          icon={faCircleUser}
                          style={{
                            position: "relative",
                            color: "#41675c",
                            fontSize: isSmallScreen ? "16px" : "20px",
                            cursor: "pointer",
                          }}
                        />
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem
                            sx={{ fontSize: "14px" }}
                            onClick={popupState.close}
                          >
                            Profile
                          </MenuItem>
                          <MenuItem
                            sx={{ fontSize: "14px" }}
                            onClick={popupState.close}
                          >
                            Settings
                          </MenuItem>
                          <MenuItem
                            sx={{ fontSize: "14px" }}
                            onClick={() => {
                              setLoggedOutModal(true);
                              popupState.close();
                            }}
                          >
                            Logout
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: isSmallScreen ? "column" : "row",
                }}
              >
                <img src={ECAfricaLogo} width={isSmallScreen ? 80 : 120} />
                <IconButton
                  onClick={handleBackHome}
                  size={isSmallScreen ? "small" : "medium"}
                >
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{
                      color: "#41675c",
                      fontSize: isSmallScreen ? "16px" : "20px",
                    }}
                  />
                </IconButton>
              </Box>
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: isSmallScreen ? "10px" : "2rem",
                }}
              >
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Badge badgeContent={responseForQuotes} color="primary">
                        <FontAwesomeIcon
                          {...bindTrigger(popupState)}
                          icon={faBell}
                          style={{
                            color: "#41675c",
                            fontSize: isSmallScreen ? "16px" : "20px",
                            cursor: "pointer",
                          }}
                        />
                      </Badge>
                      <Menu {...bindMenu(popupState)} sx={{ padding: 0 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#41675C",
                            width: "350px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              margin: "0 auto",
                              color: "#fff",
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: "30px",
                              paddingBottom: "-25px",
                              paddingTop: "9%",
                            }}
                          >
                            Notifications
                          </Typography>
                          {isFeedbackVisible && (
                            <Box
                              sx={{
                                height: "65vh",
                                overflowY: "auto",
                                scrollbarWidth: "none", // For Firefox
                                msOverflowStyle: "none", // For Internet Explorer and Edge
                                "&::-webkit-scrollbar": {
                                  display: "none", // For Chrome, Safari, and Opera
                                },
                              }}
                            >
                              {feedback.map((resourceQ, index) => (
                                <FeedBackCard
                                  key={index}
                                  resourceId={resourceQ.ResourceId}
                                  title={resourceQ.title}
                                  description={resourceQ.description}
                                  Status={resourceQ.Status}
                                  quantity={resourceQ.quantity}
                                />
                              ))}
                            </Box>
                          )}

                          <FontAwesomeIcon
                            icon={
                              isFeedbackVisible ? faChevronUp : faChevronDown
                            }
                            style={{
                              color: "#fff",
                              fontSize: "35px",
                              cursor: "pointer",
                            }}
                            onClick={toggleFeedbackVisibility}
                          />
                        </Box>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>

                <Box>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <FontAwesomeIcon
                          {...bindTrigger(popupState)}
                          icon={faCircleUser}
                          style={{
                            position: "relative",
                            color: "#41675c",
                            fontSize: isSmallScreen ? "16px" : "20px",
                            cursor: "pointer",
                          }}
                        />
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem
                            sx={{ fontSize: "14px" }}
                            onClick={popupState.close}
                          >
                            Profile
                          </MenuItem>
                          <MenuItem
                            sx={{ fontSize: "14px" }}
                            onClick={popupState.close}
                          >
                            Settings
                          </MenuItem>
                          <MenuItem
                            sx={{ fontSize: "14px" }}
                            onClick={() => {
                              setLoggedOutModal(true);
                              popupState.close();
                            }}
                          >
                            Logout
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </Box>
              </Box>
            </>
          )}
        </Container>
      </ClickAwayListener>

      <Modal open={logOutModal} onClose={handleLogoutClose}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: 2,
            borderRadius: 1,
            width: isSmallScreen ? "80%" : "25%",
            margin: isSmallScreen ? "50% auto" : "12% auto",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Are you sure you want to logout?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "70%",
              margin: "0 auto",
            }}
          >
            <Box
              onClick={handleLogout}
              sx={{ ...smallBtns, cursor: "pointer", marginLeft: "1.8rem" }}
            >
              Yes
            </Box>
            <ClickAwayListener>
              <Box
                onClick={handleLogoutClose}
                sx={{
                  ...smallBtns,
                  backgroundColor: "#fff",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                No
              </Box>
            </ClickAwayListener>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DashHeader;
