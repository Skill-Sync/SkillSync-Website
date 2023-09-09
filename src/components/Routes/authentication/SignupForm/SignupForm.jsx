import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./SignupForm.style.scss";
import signup from "../../../../assets/signup.png";
import google from "../../../../assets/google 2.png";
import { ReactComponent as Title } from "../../../../assets/title.svg";
import { ReactComponent as IconTitle } from "../../../../assets/Logo.svg";
import FormInput from "../../../formInput/FormInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const theme = createTheme();

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      className="signup-page-container"
      sx={{
        backgroundImage: `url( ${signup} )`,
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
            <Box component="form" noValidate className="signup-container">
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
                onClick={handleSumbit}
                className="signup-btn"
              >
                Sign Up
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="google-btn"
                onClick={handleSumbit}
              >
                <img src={google} alt="google_Image" />
                Sign in with Google
              </Button>

              <Typography href="#" variant="body2" className="have-acount">
                Already have an account? <Link>Sign In</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default SignupForm;
