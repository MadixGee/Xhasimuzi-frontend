import React from "react";
import Card from "./electionsCard";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import DashHeader from "../dashboard/dashHeader";
import { smallBtns, searchBtnStyle } from "../assets/components/Styles";
import { InputFieldForm } from "../JustCoolMUIStyles/Styles";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSortBy] = useState([]);
  const [dataAllOfferings, setOfferings] = useState([]);
  const [ItemsPerPage, setItemsPerPage] = useState(10);
  const [dataOfferingFromServer, setOfferingFromServer] = useState([]);

  const [value, setValue] = useState([]);
  const [checkedLevels, setCheckedLevels] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  ///////////const [showData, setShowData] = useState(false);
  const [subCategoryList, setSubcategory] = useState([]);
  const [categoriesList, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [searchHeader, setSearchHeader] = useState("");
  const [funders, setFunders] = useState([]);
  const [category, setCategory] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [servicesID, setServiceID] = useState();
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [businessData, setbusinessData] = useState({});
  const [serviceInfoArray, setServiceInfoArray] = useState([]);
  const [serviceInfoProgress, setServiceProgress] = useState(0);
  const [industry, setIndustry] = useState("");
  const [selectServices, setSelectServices] = useState("");
  const [addFunding, setAddFunding] = useState([]);
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/Elections");
  }
  useEffect(() => {
    const industryObj = selectedIndustry.find((indust) => {
      console.log(indust);
      return industry === indust.name;
    });

    if (industryObj) {
      setServiceID(industryObj.id);
    }
  }, [industry]);
  useEffect(() => {
    const updatedFields = [services];
    setServiceInfoArray(updatedFields);
    const nonEmptyValues = updatedFields.filter((field) => {
      if (typeof field === "object") {
        return Object.keys(field).length > 0;
      }
    });
    const progress = (nonEmptyValues.length / updatedFields.length) * 100;
    setServiceProgress(progress);
  }, [services]);

  const handleSelectServices = (servicesObj) => {
    setSelectServices(servicesObj);
  };
  const [loading, setIsLoading] = useState(true);
  const [allFunders, setAllFunders] = useState([]);

  function handleFilter() {
    const filteredFunders = allFunders.filter(
      (funder) => funder["Industry ID"] == industry
    );

    setFunders(filteredFunders);
    if (industry === "All") {
      setFunders(allFunders);
    }

    if (selectServices != "") {
      const filteredFunders = allFunders.filter(
        (funder) => funder.service == selectServices
      );
      setFunders(filteredFunders);
    }
    setSelectServices("");
  }

  useEffect(() => {
    const filteredValues = allFunders.filter((funder) => {
      return funder["Funding Information"].opportunityName
        .toLowerCase()
        .includes(searchHeader.toLowerCase());
    });
    setFunders(filteredValues);

    // if (filteredValues.length > 0) {
    //   setFunders(filteredValues);
    // }
  }, [searchHeader]);
  const handleInputSubmit = () => {
    setCategoryName("");
    setShowInput(false);
  };

  //const [selectedIndustry, setSelectedIndustry] = useState([]);

  const handleCheckboxChange = (level) => {
    if (checkedLevels.includes(level)) {
      setCheckedLevels(checkedLevels.filter((item) => item !== level));
    } else {
      setCheckedLevels([...checkedLevels, level]);
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSortBy(typeof value === "string" ? value.split(",") : value);
  };

  const changeItemsPerPage = (event) => {
    setItemsPerPage(event.target.value);
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" sx={{ marginTop: "0.25rem" }}>
            <Box sx={{ fontSize: "h4.fontSize", color: "#41675c" }}>
              Elections
            </Box>
          </Typography>
          <Box>
            <button
              type="submit"
              onClick={handleAdd}
              style={{
                ...smallBtns,
                alignSelf: "end",
                height: "20%",
                width: "180px",
              }}
            >
              <>
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faCirclePlus}
                />
                Initiate New Election
              </>
              {/* )} */}
            </button>
          </Box>
        </Box>

        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={2.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                backgroundColor: "#FFF7F0",
                border: "2px solid #F1CEB4 ",
                borderRadius: "15px",
                padding: "1rem",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "700", fontSize: "12px" }}
              >
                Filters
              </Typography>

              <FormControl
                variant="standard"
                sx={{ width: "100%", marginTop: "1rem" }}
              >
                <FormLabel
                  style={{
                    color: "#000",
                    marginBottom: "-1rem",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                  shrink
                >
                  Status
                </FormLabel>
                <StyledSelect
                  sx={{ backgroundColor: "#fff" }}
                  disableUnderline
                  onChange={(e) => {
                    setIndustry(e.target.value);
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  {selectedIndustry.map((industry) => (
                    <MenuItem key={industry.id} value={industry.id}>
                      {industry.name}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </FormControl>

              <Box sx={{ width: "100%", marginTop: "20px" }}>
                <Button sx={{ ...smallBtns }}>Apply</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9.5}>
            <Box
            // sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "space-between",
            // }}
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
                    value={searchHeader}
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

            <Box style={{ marginTop: "1rem", padding: "1rem" }}>
              {funders.map((funder) => {
                const industry = selectedIndustry.find(
                  (industry) => industry.id === parseInt(funder["Industry ID"])
                );

                return (
                  //   <Card
                  //     id={funder["Funding Information"].id}
                  //     funder={funder["Funding Information"].opportunityName}
                  //     description={funder["Funding Information"].description}
                  //     // industry={industry.name}
                  //     industry={funder["Funding Information"].industries}
                  //     service={"as long we serving humanity"}
                  //     BEE={funder["Funding Information"].beeLevel}
                  //     amountOfFunds={funder["Funding Information"].fundingAmount}
                  //     years={funder["Funding Information"].period}
                  //     numberOfEmployees={
                  //       funder["Funding Information"].numberOfEmployees
                  //     }
                  //     deadline={funder["Funding Information"].deadline}
                  //     mine={
                  //       funder["Funding Information"].businessId ===
                  //       parseInt(localStorage.getItem("userData"))
                  //         ? true
                  //         : ""
                  //     }
                  //     picture={funder["Funding pictures"][0]}
                  //     images={funder["Funding pictures"]}
                  //     companyLogo={funder["Company pictures (Logos)"][0]}
                  //     author={funder["Funding Information"].created_by}
                  //   />

                  <Card
                    image="url"
                    title="National Assembly of 2025"
                    type="National Assembly"
                    startDate="27 May 2024"
                    endDate="29 May 2024"
                    voterTurnout="6.4 Million Voters"
                    status="Completed"
                  />
                );
              })}
            </Box>
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
