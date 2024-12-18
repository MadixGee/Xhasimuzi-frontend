import DashHeader from "../dashboard/dashHeader";
import {
  FormControl,
  FormLabel,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Button,
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
function Update() {
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
              Political Patry
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
                update Political Party
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
                <Typography variant="body1">Party Information</Typography>
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
                    Party Name
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="Umkhonto Wesizwe"
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
                    Abbreviation
                  </FormLabel>
                  <StyledSelect
                    sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                    disableUnderline
                    placeHolder="MK"
                  ></StyledSelect>
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
                    Head Quarters
                  </FormLabel>
                  <StyledSelect
                    sx={{ backgroundColor: "#fff", padding: "3.3px" }}
                    disableUnderline
                    placeHolder="MK"
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
                    Date Founded
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
                    Leader Name
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="Jacob Zuma"
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
                    Website
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="info@mkparty.co.za"
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
                <Button
                  sx={{
                    backgroundColor: "#E33629",
                    color: "#fff",
                    borderRadius: "18px",
                  }}
                >
                  Delete Political Party
                </Button>
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
                    Phone Number
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="Umkhonto Wesizwe"
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
                    Manifesto
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    id="title"
                    placeholder="Musical Chairs, a timeless party game cherished across generations, epitomizes the blend of excitement and simplicity that defines classic entertainment. Set amidst a circle of chairs, one fewer than the number of players, the game commences with jovial movement as participants stroll around the chairs to the rhythm of music. The abrupt cessation of music jolts players into a frenzy, each vying to secure a seat before the melody's end. With each round, a chair is removed, intensifying the competition until only one player remains victorious. Beyond its surface amusement, Musical Chairs instills valuable lessons, fostering attentiveness to auditory cues, fostering adaptability, and imparting the resilience to cope with fleeting setbacks. Whether at children's gatherings, family reunions, or educational settings, the allure of Musical Chairs endures, epitomizing the enduring charm of communal play."
                  />
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
export default Update;
