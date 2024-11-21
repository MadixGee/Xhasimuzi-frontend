export const headerStyle = {
  textAlign: "center",
  color: "#DD7D32",
  width: "65%",
  margin: "0 auto",
  position: "relative",
  top: "-6rem",
  fontWeight: "normal",
  fontFamily: "Helvetica, Arial, sans-serif",
};

export const VideSect = {
  position: "relative",
  width: "100%",
  height: "100vh", // Adjust the height as needed
  overflow: "hidden",
};

export const videoStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "56vh",
  objectFit: "cover", // Ensure the video covers the entire container
};

export const playButtonStyle = {
  position: "absolute",
  top: "30%",
  left: "53%",
  transform: "translate(-50%, -50%)",
  width: "100px",
  height: "100px",
  textAlign: "center",
  lineHeight: "100px",
  cursor: "pointer",
  color: "#fff",
};

export const textStyle = {
  position: "absolute",
  top: "10%",
  left: "10%",
  color: "#fff",
  fontFamily: "Helvetica, Arial, sans-serif",
};

export const textStyleHead = {
  fontWeight: "bold",
  fontFamily: "Helvetica, Arial, sans-serif",
};


export const pictStyleExt = {
  height: "35vh",
  paddingTop: "1rem",
  width: "85%",
  margin: "0 auto",
  paddingBottom: "1rem",
  backgroundColor: "#FBB985",
  position: "relative",
  marginTop: "-15rem",
};

export const blurredBackgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#FBB985",
  filter: "blur(5px)",
  zIndex: 1,
};

export const imgStyle = {
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  height: "35vh",
};

export const textStyleExt = {
  color: "#fff",
  fontWeight: "normal",
  fontFamily: "Helvetica, Arial, sans-serif",
  lineHeight: "1.85rem",
  width: "30%",
  position: "relative",
  zIndex: 2, // This will keep the text on top of the blurred background
  padding: "1rem",

};

export const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  top: "-15.5rem",
  width: "75%",
};
