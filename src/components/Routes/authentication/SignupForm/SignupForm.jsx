import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./SignupForm.style.scss";
import signupimg from "../../../../assets/signup.png";
import google from "../../../../assets/google 2.png";
import { ReactComponent as Title } from "../../../../assets/title.svg";
import { ReactComponent as IconTitle } from "../../../../assets/Logo.svg";
import FormInput from "../../../formInput/FormInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../../../context/AuthContext";

const theme = createTheme();

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useStateContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== passConfirm) {
      console.log("Passwords do not match");
      return;
    }
    const type = "mentor";
    try {
      await signup(name, email, pass, passConfirm, type);
      console.log("signup success");
      navigate("/find-skill");
    } catch (error) {
      console.log("signup failed:", error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box
      className="signup-page-container"
      sx={{
        backgroundImage: `url( ${signupimg} )`,
      }}
    >
      <Box className="signup-page-title">
        <IconTitle style={{ margin: "0 15px 18px 0" }} />
        <Title />
      </Box>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box className="form-container">
            <Typography
              className="create-account-h"
              component="h1"
              variant="h5"
            >
              Create an Account
            </Typography>
            <Typography component="p" variant="p" className="create-account-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dicta! Sint quidem qui
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="signup-container"
            >
              <Grid className="inputs-container" container spacing={2}>
                {/* inputs fields */}
                <Grid className="input-container" item>
                  <FormInput
                    className="text-field"
                    required
                    fullWidth
                    name="name"
                    label="Full name"
                    type="name"
                    id="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid className="input-container" item>
                  <FormInput
                    className="text-field"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>

                <Grid
                  className="input-container"
                  item
                  sx={{ position: "relative" }}
                >
                  <FormInput
                    className="text-field"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    id="password"
                    autoComplete="new-password"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      style={{
                        position: "absolute",
                        right: "-170px",
                        top: "50%",
                        transform: "translateY(-30%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                </Grid>
                <Grid
                  className="input-container"
                  itemb
                  sx={{
                    position: "relative",
                    marginLeft: "20px",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    className="text-field"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    autoComplete="new-Password"
                    value={passConfirm}
                    onChange={(e) => {
                      setPassConfirm(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputAdornment position="end">
                    <IconButton
                      className="password-icon"
                      onClick={handleTogglePassword}
                      edge="end"
                      style={{
                        position: "absolute",
                        right: "-170px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                </Grid>
                {/* <Grid className="agreement-container " item>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />

                  <label htmlFor="remember">
                    I've read and agree to the
                    <span className="agreement-text">
                      {" "}
                      Terms and Conditions {""}
                    </span>
                    and the
                    <span className="agreement-text"> Privacy Policy </span>
                  </label>
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="signup-btn"
              >
                Sign Up
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="google-btn"
              >
                <img src={google} alt="google_Image" />
                Sign in with Google
              </Button>
              <Typography href="#" variant="body2" className="have-acount">
                Already have an account? <Link>Sign In</Link>
              </Typography>
              <Typography href="#" variant="body2" className="have-acount">
                Are You a Mentor?
                <Link to="monetor-request" style={{ color: "#FFAD0D" }}>
                  Sign up as mentor
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default SignupForm;
