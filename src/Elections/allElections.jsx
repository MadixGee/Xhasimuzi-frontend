import React from "react";
import Card from "./electionsCard";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import DashHeader from "../dashboard/dashHeader";
import { smallBtns, searchBtnStyle } from "../assets/components/Styles";
import { InputFieldForm } from "../JustCoolMUIStyles/Styles";
import IEC from "../assets/IEC.jpg";
import {
  Box,
  Typography,
  Container,
  Grid,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Button,
  MenuItem,
  usePagination,
  TextField,
  Grid2,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { StyledSelect } from "../JustCoolMUIStyles/Styles";
//import { BpCheckbox } from "../resourceBank/componenStylesSearch";

import { useNavigate } from "react-router-dom";

function AllElections() {
  const justSomeFakeElections = [
    { title: "ECA elections", type: "inhouse", startDate: "21 November 2024" },
    { title: "ECA elections", type: "inhouse", startDate: "21 November 2024" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [elections, setElections] = useState([
    { title: "ECA elections", type: "inhouse", startDate: "21 November 2024" },
    { title: "ECA elections", type: "inhouse", startDate: "21 November 2024" },
  ]);
  const navigate = useNavigate();
  function handleVote() {
    navigate("/addVote");
  }

  const List = styled("ul")({
    listStyle: "none",
    padding: "1rem",
    margin: "1rem",
    display: "flex",
    justifyContent: "space-between",
  });
  const { items } = usePagination({
    count: 10,
    onChange: (event, page) => setCurrentPage(page),
  });

  // useEffect(()=>{
  //   setElections(justSomeFakeElections)
  // },[])

  return (
    <body style={{ backgroundColor: "#FBF9F9", height: "100vh" }}>
      <DashHeader />

      <Container
        sx={{
          marginTop: "2rem",
          backgroundColor: "#FBF9F9",
          width: "95%",
          padding: "0.25rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: " #41675C",
            fontSize: "35px",
            marginBottom: "25px",
          }}
        >
          Welcome Back Mrs. Jane Doe
        </Typography>
        <Box
          sx={{
            border: "1px solid  #F07402",
            backgroundColor: " #FFF7F0",
            padding: "20px",
            borderRadius: "25px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: " #41675C" }}>
            {" "}
            Active Election
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item={2}>
              <img style={{ width: "35%" }} src={IEC} alt="logo" />
            </Grid2>
            <Grid2 item={5}>
              <Box>
                <Typography sx={{ color: " #41675C" }}>
                  2024 National Elections
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Elections are the cornerstone of democracy, allowing citizens
                  to have a direct say in shaping their future. By voting, you
                  help choose leaders and policies that reflect your values and
                  priorities, ensuring your voice is heard. Participating in
                  elections also strengthens accountability, as it holds elected
                  officials responsible for their actions and decisions. Every
                  vote matters, and by casting yours, you contribute to building
                  a fair, inclusive, and representative society.
                </Typography>
                <Typography sx={{ color: " #41675C", fontWeight: "bold" }}>
                  Start Date: 25 November 2024
                </Typography>
                <Typography sx={{ color: " #41675C", fontWeight: "bold" }}>
                  End Date: 25 November 2025
                </Typography>
              </Box>
            </Grid2>
            <Grid2 item={3}>
              <Button onClick={handleVote} sx={{ ...smallBtns }}>
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faCirclePlus}
                />
                Vote
              </Button>
            </Grid2>
          </Grid2>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" sx={{ marginTop: "0.25rem" }}>
            <Box
              sx={{
                fontSize: "h4.fontSize",
                color: "#41675c",
              }}
            >
              Get to know the people you are voting for.
            </Box>
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "13px" }}>
            Explore detailed information about political parties and their
            policies,<br></br> all in one place. Access comprehensive stats on
            current and past <br></br> elections to stay informed and make
            empowered decisions. With <br></br> Politech, knowledge is at your
            fingertips!
          </Typography>
        </Box>

        <Grid container spacing={2} style={{ marginTop: "3rem" }}>
          <Grid item xs={2.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                borderRadius: "15px",
                padding: "1rem",
                position: "relative",
                bottom: "3.13rem",
              }}
            >
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <FormLabel
                  style={{
                    color: "#000",

                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                  shrink
                >
                  Category
                </FormLabel>
                <StyledSelect
                  sx={{ backgroundColor: "#fff" }}
                  placeholder="Political Party"
                  disableUnderline
                >
                  <MenuItem value="All">Political Party</MenuItem>
                </StyledSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={9.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  border: "1px solid #DD7D32",
                  display: "flex",
                  borderRadius: "20px",
                  padding: "0",
                  gap: "1.5rem",
                  width: "60%",
                  backgroundColor: "#fff",
                }}
              >
                <Box sx={{}}></Box>
                <Box sx={{ width: "40%" }}>
                  <InputFieldForm
                    placeholder="Keywords"
                    style={{
                      borderStyle: "none",
                      padding: "0",
                      marginTop: "0.25rem",
                      width: "100%",
                      fontSize: "12px",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    width: "25%",
                    padding: "0",
                    marginLeft: "8.92rem",
                    //position: "relative",
                    //right: "-4px",
                  }}
                >
                  <button
                    style={{ ...searchBtnStyle, width: "100%", height: "100%" }}
                    type="submit"
                  >
                    Search
                  </button>
                </Box>
              </Box>
            </Box>
            <Grid
              sx={{
                width: "100%", // Ensure it takes the full width of its parent container
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Dynamic columns
                gap: "1rem", // Add spacing between cards
              }}
            >
              <Box style={{ marginTop: "1rem", padding: "1rem" }}>
                {elections.map((election) => (
                  <Card
                    title={election.title}
                    type={election.type}
                    startData={election.startDate}
                    endDate={election.endDate}
                    voterTurnout={election.voterTurnout}
                    status={election.status}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem",
          }}
        >
          <nav style={{ width: "35%", padding: "0px" }}>
            <List sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              {items.map(({ page, type, selected, ...item }, index) => {
                let children = null;

                if (type === "start-ellipsis" || type === "end-ellipsis") {
                  children = "…";
                } else if (type === "page") {
                  children = (
                    <button
                      type="button"
                      style={{
                        fontWeight: selected ? "bold" : undefined,
                      }}
                      {...item}
                    >
                      {page}
                    </button>
                  );
                } else {
                  children = (
                    <button
                      style={{
                        width: "100%",
                        padding: "0",
                        backgroundColor:
                          type === "previous" || type === "next" ? "#fff" : "",
                        border:
                          type === "previous" || type === "next" ? "none" : "",
                        fontSize:
                          type === "previous" || type === "next" ? "15px" : "",
                      }}
                      type="button"
                      {...item}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "10px",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ marginLeft: "0.5rem" }}>
                          {type == "next"
                            ? type.charAt(0).toUpperCase() + type.slice(1)
                            : ""}
                        </Typography>

                        <FontAwesomeIcon
                          icon={
                            type === "previous" ? faChevronLeft : faChevronRight
                          }
                          style={{ fontSize: "10px", cursor: "pointer" }}
                        />
                        <Typography sx={{ marginRight: "0.5rem" }}>
                          {type == "previous"
                            ? type.charAt(0).toUpperCase() + type.slice(1)
                            : ""}
                        </Typography>
                      </Box>
                    </button>
                  );
                }

                return <li key={index}>{children}</li>;
              })}
            </List>
          </nav>
        </Box>
      </Container>
    </body>
  );
}
export default AllElections;
