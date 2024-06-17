import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { Box, Grid, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValidMobile, setIsValidMobile] = useState(false);


  const loginPage = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/signup`,
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const result = await response.json();
    console.log(result);
    
  };
  useEffect(() => {
    loginPage();
  }, []);
  

  return (
    <>
      <div className="login-bg">
        <div className="benefits">
          <p>UNLOCK THESE BENEFITS</p>
        </div>
        <div className="log-earn">
          <p style={{fontSize: "16px", fontWeight: "600", marginTop: "20px"}}>Earn goCash</p>
          <p style={{fontSize: "13px"}}>₹100 on Sign Up & Cashback on Bookings</p>
        </div>
        <div className="log-earn">
          <p style={{fontSize: "16px", fontWeight: "600", marginTop: "20px"}}>Loyalty Benefits</p>
          <p style={{fontSize: "13px"}}>Extra Discounts, Free Seat Selection etc</p>
        </div>
        <div className="log-earn">
          <p style={{fontSize: "16px", fontWeight: "600", marginTop: "20px"}}>Exclusive Offers</p>
          <p style={{fontSize: "13px"}}>Daily Steal Deals & Special Discounts</p>
        </div>
        <div className="log-earn-bottom">
          <div style={{fontSize: "16px", fontWeight: "600", marginTop: "40px"}}>FLAT 12% OFF*</div>
          <div style={{fontSize: "13px", marginTop: "5px"}}>on your first Flight booking</div>
        </div>
      </div>

      <div className="login-2">
        <div className="cross-icon">
          <CloseIcon />
        </div>
        <div className="login-foot">Login/Signup</div>

        <Box>
          <Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <TextField
                label="Enter Your Mobile Number"
                variant="outlined"
                value={mobileNumber}
         
                required
                sx={{ width: 250 }}
              ></TextField>
            </div>
          </Grid>
        </Box>
        <button className="continue">Continue</button>
      </div>
    </>
  );
};

export default Login;