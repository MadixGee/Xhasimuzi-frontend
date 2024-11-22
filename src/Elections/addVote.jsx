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
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledSelect } from "../JustCoolMUIStyles/Styles";
import DashHeader from "../dashboard/dashHeader";
import { useNavigate } from "react-router-dom";
import { smallBtns, searchBtnStyle } from "../assets/components/Styles";
import { InputFieldForm } from "../JustCoolMUIStyles/Styles";
function Vote() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ padding: "25px" }}>
        <Box>
          <DashHeader />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#41675c",
          }}
        ></Box>
        <Box
          sx={
            {
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "space-between",
            }
          }
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#41675c",
              marginTop: "20px",
            }}
          >
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              style={{ color: "#41675c", fontSize: "25px" }}
              onClick={() => {
                navigate("/allElections");
              }}
            />
            <Typography variant="body1">Back</Typography>
          </Box>
          <Typography component="div" sx={{ marginTop: "1.5rem" }}>
            <Box sx={{ fontSize: "h4.fontSize", color: "#41675c" }}>
              Register To Vote
            </Box>
          </Typography>
          <Typography>Please fill in the following details</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "22px",
            }}
          >
            <Button sx={{ ...smallBtns }}>Register To Vote</Button>
          </Box>
          <Box
            sx={{
              marginTop: "0.5rem",
              backgroundColor: "#fff",
              paddingBottom: "0.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#DD7D32",
                color: "#fff",
                padding: "0.5rem",
              }}
            >
              <Typography variant="body1">Voter Information</Typography>
            </Box>
            <Box
              sx={{
                marginTop: "1rem",
                margin: "0 auto",
                border: "1px solid #DD7D32",
                padding: "15px",
              }}
            >
              <Grid2 Container Spacing={2}>
                <Grid item sx={5}>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      First Name
                    </FormLabel>
                    <InputFieldForm type="text" id="title" placeholder="Bob" />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Middle Name
                    </FormLabel>
                    <InputFieldForm type="text" id="title" placeholder="Bob" />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Last Name
                    </FormLabel>
                    <InputFieldForm
                      type="text"
                      id="title"
                      placeholder="Marley"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Identity Number
                    </FormLabel>
                    <InputFieldForm type="text" id="title" />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Date Of Birth
                    </FormLabel>
                    <InputFieldForm
                      type="text"
                      id="title"
                      placeholder="1877/05/15"
                    />
                  </FormControl>
                  <FormControl
                    variant="standard"
                    sx={{ width: "95%", padding: "15px" }}
                  >
                    <FormLabel
                      style={{
                        color: "#000",
                        //marginBottom: "-1rem",
                        //fontWeight: "700",
                        fontSize: "17px",
                      }}
                      shrink
                    >
                      Sex
                    </FormLabel>
                    <StyledSelect
                      sx={{
                        backgroundColor: "#fff",
                        padding: "3.3px",
                        width: "100%",
                      }}
                      disableUnderline
                      placeHolder="MK"
                    >
                      <MenuItem value="All">Male</MenuItem>
                      <MenuItem value="All">Female</MenuItem>
                    </StyledSelect>
                  </FormControl>
                  <FormControl
                    variant="standard"
                    sx={{ width: "95%", padding: "15px" }}
                  >
                    <FormLabel
                      style={{
                        color: "#000",
                        //marginBottom: "-1rem",
                        //fontWeight: "700",
                        fontSize: "17px",
                      }}
                      shrink
                    >
                      Ethnicity
                    </FormLabel>
                    <StyledSelect
                      sx={{
                        backgroundColor: "#fff",
                        padding: "3.3px",
                        width: "100% !important",
                      }}
                      disableUnderline
                      placeHolder="MK"
                    >
                      <MenuItem value="All">Black</MenuItem>
                      <MenuItem value="All">White</MenuItem>
                    </StyledSelect>
                  </FormControl>
                  <FormControl
                    variant="standard"
                    sx={{ width: "95%", padding: "15px" }}
                  >
                    <FormLabel
                      style={{
                        color: "#000",
                        //marginBottom: "-1rem",
                        //fontWeight: "700",
                        fontSize: "17px",
                      }}
                      shrink
                    >
                      Home Language
                    </FormLabel>
                    <StyledSelect
                      sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                      disableUnderline
                      placeHolder="MK"
                    >
                      <MenuItem value="All">English</MenuItem>
                      <MenuItem value="All">Zulu</MenuItem>
                    </StyledSelect>
                  </FormControl>
                  <FormControl
                    variant="standard"
                    sx={{ width: "95%", padding: "15px" }}
                  >
                    <FormLabel
                      style={{
                        color: "#000",
                        //marginBottom: "-1rem",
                        //fontWeight: "700",
                        fontSize: "17px",
                      }}
                      shrink
                    >
                      Province
                    </FormLabel>
                    <StyledSelect
                      sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                      disableUnderline
                      placeHolder="MK"
                    >
                      <MenuItem value="All">WesternCape</MenuItem>
                      <MenuItem value="All">Limpopo</MenuItem>
                    </StyledSelect>
                  </FormControl>
                </Grid>
                <Grid item sx={5}>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Cellphone Number
                    </FormLabel>
                    <InputFieldForm
                      type="text"
                      id="title"
                      placeholder="0158752547"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Email Address
                    </FormLabel>
                    <InputFieldForm
                      type="text"
                      id="title"
                      placeholder="@mail.com"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Password
                    </FormLabel>
                    <InputFieldForm
                      type="text"
                      id="title"
                      placeholder="*********"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                    variant="standard"
                  >
                    <FormLabel
                      shrink
                      focused
                      style={{ color: "#000", marginBottom: "-1rem" }}
                    >
                      Confirm Password
                    </FormLabel>
                    <InputFieldForm
                      type="text"
                      id="title"
                      placeholder="********"
                    />
                  </FormControl>
                </Grid>
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Vote;
