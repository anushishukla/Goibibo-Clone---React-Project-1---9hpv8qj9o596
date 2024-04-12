import React, { useState } from "react";
import {URL, APP_TYPE, PROJECT_ID} from "./Constant"
import "../styles/Login.css";
import { Box, Grid, TextField } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const user = {
            name,
            email,
            password,
            appType : APP_TYPE,
        };
        const response = await fetch(URL, {
            method : 'POST',
            headers : {
                projectID : PROJECT_ID,
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({...user})
        });
        if(!response.ok){
            alert ('Signup Failed')
            return;
        }
        console.log(response.token)
        const token = localStorage.setItem('token',JSON.stringify(response.token))
        
        alert ('Signup Done');
    } catch (error) {
        
    }
  };

  const handleUserName = (e) => {
    setName(e.target.value);
  };

  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };
  return (

    <>
<div>
    <div className="login-bg">
      
     <div className="benefits">
      <h1>UNLOCK THESE BENEFITS</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <inpput
          type="text"
          name="name"
          value={name}
          onChange={handleUserName}
        />

        <label>Email</label>
        <inpput
          type="email"
          name="email"
          value={email}
          onChange={handleUserEmail}
        />

        <label>Password</label>
        <inpput
          type="password"
          name="password"
          value={password}
          onChange={handleUserPassword}
        />
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
    </div>
  <div >
    <div className="login-2" >
        <div className="login-foot">Login/Signup</div>

        <Box>
          <Grid>
            <TextField label="Number" placeholder="enter number" variant="standard" fullWidth required>
              
            </TextField>
          </Grid>
        </Box>
        <div className="continue">Continue</div>
        
    </div>
    </div>
     </>
  );
};

export default Login;
