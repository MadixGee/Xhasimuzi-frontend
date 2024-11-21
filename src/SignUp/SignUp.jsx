import { Box } from "@mui/material";
import { InputFieldForm } from "../JustCoolMUIStyles/Styles.jsx";
import { Link, useNavigate } from "react-router-dom";

import {
  styleForLogoContainer,
  styleForLogin,
  styleForEmailAddress,
  styleForPassword,
  styleForButton,
  styleForClickHere,
  styleForParent,
  styleForText,
  styleForPass,
  styleForAcc,
} from "../assets/components/login-styles.jsx";

function SignUp() {
  const navigate = useNavigate();

  function handleDash() {
    navigate("/dashboard");
  }
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "25px",
        width: "70%",
        height: "auto",
        // position: "relative",
        //left: "15rem",
        //position: "relative",
        //bottom: "-6em",
        margin: "5rem auto",
        paddingBottom: "1rem",
        border: "1px solid #F07402",
      }}
    >
      <div style={styleForParent}>
        <div style={styleForLogoContainer} className="login-container">
          {/* <img src={ECAfricaLogo} height={80} alt="logo" /> */}

          <h2>
            {" "}
            <label className="loginStyle" style={styleForLogin} htmlFor="Login">
              Login
            </label>{" "}
          </h2>

          <form>
            <label style={styleForText} htmlFor="discription">
              Come with us and <br />
              let's connect enterprenuers accross Africa!
            </label>
            <br />
            <br />
            <div className="form-group">
              <label style={styleForEmailAddress} htmlFor="Email address">
                Email Address
              </label>{" "}
              <br />
              <InputFieldForm />
            </div>
            <div className="form-group">
              <label style={styleForPassword} htmlFor="password">
                Password
              </label>{" "}
              <br />
              <InputFieldForm />
            </div>{" "}
            <br />
            <Link to="/forgot-password">
              <label style={styleForPass} htmlFor="Fogort password?">
                {" "}
                Forgot Password?
              </label>
            </Link>
            <button onClick={handleDash} style={styleForButton} type="submit">
              Login
            </button>{" "}
            <br /> <br />
            <label style={styleForAcc} htmlFor="Don't have an account?">
              {" "}
              Don't have an account?{" "}
            </label>
            <a style={styleForClickHere}> Click Here</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
