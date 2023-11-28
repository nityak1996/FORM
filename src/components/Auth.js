import { Box, Button, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useState } from "react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc ",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              value={inputs.name}
              name="name"
              margin="normal"
              variant="outlined"
              placeholder="Name"
              type="text"
            />
          )}
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            margin="normal"
            variant="outlined"
            placeholder="Email"
            type="email"
          />
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            margin="normal"
            variant="outlined"
            placeholder="Password"
            type="password"
          />
          <Button
            endIcon={isSignup ? <HowToRegIcon /> : <LoginIcon />}
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button 
          endIcon={isSignup ? <LoginIcon/>  : <HowToRegIcon />}
          onClick={resetState} sx={{ marginTop: 3, borderRadius: 3 }}>
            change to {isSignup ? "Login" : "signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
