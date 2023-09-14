import React, { useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import google from "../../../../assets/google 2.png";
import { ReactComponent as Title } from "../../../../assets/title.svg";
import { ReactComponent as IconTitle } from "../../../../assets/Logo.svg";
import { ReactComponent as Frame } from "../../../../assets/Frame.svg";
import FormInput from "../../../formInput/FormInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./SignipForm.style.scss";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../../../../context/AuthContext";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useStateContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    const type = "mentor";
    try {
      await login(email, pass, type);
      console.log("login success");
      navigate("/find-skill");
    } catch (error) {
      console.log("login failed:", error.message);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      className="login-page-container"
      sx={{
        backgroundColor: "#131313",
      }}
    >
      <Box className="login-page-logo">
        <IconTitle style={{ marginRight: "10px " }} />
        <Title style={{ fontSize: "30px" }} />
      </Box>

      <Box
        className="signin-content-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          flex: "1 2 ",
        }}
      >
        <Container component="main" maxWidth="sm" sx={{ width: "40%" }}>
          <CssBaseline />
          <Box className="form-container">
            <Typography
              className="create-account-h"
              component="h1"
              variant="h5"
            >
              Welcome Back
            </Typography>
            <Typography component="p" variant="p" className="create-account-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dicta! Sint quidem qui
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="login-container"
            >
              <Grid className="inputs-container" container spacing={2}>
                {/* inputs fields */}

                <Grid className="input-container" item>
                  <FormInput
                    className="text-field"
                    required
                    fullWidth
                    id="email"
                    label="Email "
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
                  sx={{ position: "relative", marginBottom: "20px" }}
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
                        right: "-165px",
                        top: "50%",
                        transform: "translateY(-22%)",
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

                {/* <Grid
                  className="agreement-container "
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </Box>
                  <Typography>Forgot Password?</Typography>
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="login-btn"
              >
                LOGIN
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
                You don't have an account? <Link to="/signup">Sign up</Link>
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
        <Container className="content-login-page">
          <Box className="login-page-title">
            <IconTitle style={{ margin: "0 15px 18px 0" }} />
            <Title />
          </Box>
          <Typography component="h1" variant="h1" className="login-page-h">
            find your{" "}
            <Typography
              component="h1"
              variant="h1"
              className=" login-page-nested-h"
            >
              {" "}
              future skills
            </Typography>{" "}
            Here!
          </Typography>
          <Frame style={{ width: "105%" }} />
        </Container>
      </Box>
    </Box>
  );
};

export default SigninForm;
