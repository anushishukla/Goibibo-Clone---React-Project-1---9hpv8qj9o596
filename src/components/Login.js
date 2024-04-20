import React, { useState } from "react";

import "../styles/Login.css";
import { Box, Grid, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [isValidMobile, setIsValidMobile] = useState(false);


  const handleMobileNumberChange = (event) => {
    const number = event.target.value;
    setMobileNumber(number);
   
    setIsValidMobile(validateMobileNumber(number));
  };


  
  const validateMobileNumber = (number) => {
    return /^\d{10}$/.test(number); 
  };

  
  const handleContinue = () => {
   
    console.log('Continue clicked');
  };
  return (
    <>
      <div>
        <div className="login-bg">
    
          <div className="benefits">
            <p>UNLOCK THESE BENEFITS</p>
          </div>

         <div className="log-earn">
          <p style={{fontSize:"16px", fontWeight:"600", marginTop:"20px"}}>Earn goCash</p>
          <p style={{fontSize:"13px"}}>₹100 on Sign Up & Cashback on Bookings</p>
          </div>

          <div className="log-earn">
          <p style={{fontSize:"16px", fontWeight:"600", marginTop:"20px"}}>Loyalty Benefits</p>
          <p style={{fontSize:"13px"}}>Extra Discounts, Free Seat Selection etc</p>
          </div>

          <div className="log-earn">
          <p style={{fontSize:"16px", fontWeight:"600", marginTop:"20px"}}>Exclusive Offers</p>
          <p style={{fontSize:"13px"}}>Daily Steal Deals & Special Discounts</p>
          </div>

          <div className="log-earn-bottom">
          <div style={{fontSize:"16px", fontWeight:"600", marginTop:"40px"}}>FLAT 12% OFF*</div>
          <div style={{fontSize:"13px", marginTop:"5px"}}>on your first Flight booking</div>
          </div>

        </div>
      </div>


      <div>
        <div className="login-2">
        <div className="cross-icon">
            <CloseIcon/>
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
                  placeholder="+ 91 - "
                  variant="outlined"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  required
                  sx={{ width: 250 }}
                ></TextField>
              </div>
            </Grid>
          </Box>
          <button disabled={!isValidMobile} onClick={handleContinue} className="continue">Continue</button>
        </div>
      </div>
    </>
  );
};

export default Login;
