import DashHeader from "../dashboard/dashHeader";
import {
  FormControl,
  FormLabel,
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  faCircleChevronLeft,
  faUpload,
  faTrash,
  faFile,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "@mui/material";
import { InputFieldForm } from "../JustCoolMUIStyles/Styles";
import { smallBtns } from "../assets/components/Styles";
import { StyledSelect } from "../JustCoolMUIStyles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
function Elections() {
  const [images, setImages] = useState([]);
  function removeImage(key, images) {
    setImages(images.filter((image) => image.id !== key));
  }
  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      src: URL.createObjectURL(file),
      id: uuidv4(),
    }));
    setImages((prevImages) => [...newImages, ...prevImages]);
  });
  const onDropFiles = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      src: URL.createObjectURL(file),
      id: uuidv4(),
    }));
  });

  const {
    getRootProps: getRootPropsForImages,
    getInputProps: getInputPropsForImages,
    isDragActive: isDragActiveForImages,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" sx={{ marginTop: "1.5rem" }}>
            <Box sx={{ fontSize: "h4.fontSize", color: "#41675c" }}>
              Elections
            </Box>
          </Typography>
          <Box>
            <button
              type="submit"
              //onClick={() => onSubmit(formik.errors, formik.values)}
              style={{
                ...smallBtns,
                alignSelf: "end",
                height: "20%",
                width: "180px",
              }}
            >
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faCirclePlus}
              />
              <Typography sx={{ fontSize: "13px" }}>
                Initiative New Election
              </Typography>
            </button>
          </Box>
        </Box>
        <Typography sx={{ fontSize: "12px" }}>
          Please fill in the following details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
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
                <Typography variant="body1">Election Information</Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "1rem",
                  margin: "0 auto",
                  border: "1px solid #DD7D32",
                  padding: "15px",
                }}
              >
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
                    Election Name
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="National Assembly of 2025"
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
                    Election Type
                  </FormLabel>
                  <StyledSelect
                    sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                    disableUnderline
                    placeHolder="National Assembly"
                  ></StyledSelect>
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
                    Start Date
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="12 December 2024"
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
                    End Date
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="10 May 2025"
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
                    Status
                  </FormLabel>
                  <StyledSelect
                    sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                    disableUnderline
                    placeHolder="National Assembly"
                  ></StyledSelect>
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
                    Created By
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="Mr Maphukatha"
                  />
                </FormControl>

                <FormControl sx={{ width: "100%" }}>
                  <FormLabel
                    shrink
                    focused
                    style={{ color: "#000", marginBottom: "5px" }}
                  >
                    Pictures
                  </FormLabel>
                  <Grid container spacing={2} style={{ padding: "1.2rem" }}>
                    <Grid
                      item
                      xs={12}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        overflowX: "scroll",
                        whiteSpace: "nowrap",
                        maxHeight: "150px",
                      }}
                    >
                      {images.map((image, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "inline-block",
                            marginRight: "50px",
                            position: "relative",
                          }}
                        >
                          <FontAwesomeIcon
                            onClick={() => removeImage(image.id, images)}
                            icon={faTrash}
                            style={{
                              position: "absolute",
                              left: "130px",
                              top: "20px",
                              cursor: "pointer",
                              color: "#E6E6E6", // Change the trash icon color to white
                              zIndex: 1,
                            }}
                          />
                          <Box
                            component="span"
                            sx={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 139, 0.5)", // Dark blue overlay with opacity
                                // zIndex: 2,
                              }}
                            />
                            <img
                              src={image.src}
                              style={{
                                width: "150px",
                                height: "100px",
                                display: "block",
                              }}
                              alt={`Updated ${index + 1}`}
                            />
                          </Box>
                        </Box>
                      ))}

                      {/* {isUpdate ? (
                      <>
                        {pictures.map((image, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: "inline-block",
                              marginRight:
                                index < pictures.length - 1 ? "50px" : 0,
                              position: "relative",
                            }}
                          >
                            <FontAwesomeIcon
                              onClick={() => handleDelete(image.Id)}
                              icon={faTrash}
                              style={{
                                position: "absolute",
                                left: "130px",
                                top: "20px",
                                cursor: "pointer",
                                color: "#E6E6E6", // Change the trash icon color to white
                                zIndex: 1,
                              }}
                            />
                            <Box
                              component="span"
                              sx={{
                                position: "relative",
                                display: "inline-block",
                              }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  backgroundColor: "rgba(0, 0, 139, 0.5)", // Dark blue overlay with opacity
                                  // zIndex: 2,
                                }}
                              />
                              <img
                                src={image.URL}
                                style={{
                                  width: "150px",
                                  height: "100px",
                                  display: "block",
                                }}
                                alt={`Updated ${index + 1}`}
                              />
                            </Box>
                          </Box>
                        ))}
                      </>
                    ) : (
                      ""
                    )} */}
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className="drop-zone"
                      sx={{
                        borderRadius: "10px",
                        cursor: "pointer",
                        border: "2px dashed #41675c",
                        marginTop: "1rem",
                        padding: "20px",
                        textAlign: "center",
                        display: "inline-block",
                      }}
                      {...getRootPropsForImages()}
                    >
                      <input {...getInputPropsForImages()} />
                      {isDragActiveForImages ? (
                        <p>Drop the files here ...</p>
                      ) : (
                        <Box>
                          <FontAwesomeIcon
                            icon={faUpload}
                            style={{ color: "#41675c", fontSize: "35px" }}
                          />
                          <Typography
                            variant="body2"
                            style={{ color: "#41675c", fontSize: "10px" }}
                          >
                            Drag & drop some files here
                          </Typography>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </FormControl>
                <br />
                <br />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Box
              sx={{
                marginTop: "0.5rem",
                backgroundColor: "#fff",
                paddingBottom: "0.5rem",
              }}
            ></Box>
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
                <Typography variant="body1">Ballot Information</Typography>
              </Box>
              <Box sx={{ border: "1px solid #DD7D32", padding: "15px" }}>
                <Typography>
                  Use the search bar to find registered users who are eligible
                  to become candidates.
                </Typography>
                <Typography>
                  You can search by name, user ID email, or other identifying
                  details.
                </Typography>
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
                    Search Candidate
                  </FormLabel>
                  <StyledSelect
                    sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                    disableUnderline
                    placeHolder="National Assembly"
                  ></StyledSelect>
                </FormControl>
                <Typography>Ballot Draft</Typography>
              </Box>
              <Box sx={{ border: " 1px solid #F07402" }}></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Elections;
