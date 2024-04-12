import React, { useState } from "react";
import "../styles/Train.css";
import { Box, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "../styles/newTrain.css";

const Train = () => {
const[from,setFrom] = useState("")
const[to,setTo] = useState("")

const navigate = useNavigate()

  const handleForm = async(e) => {
    e.preventDefault()
     setFrom(from)
     setTo(to)

     navigate("/searchTrain")
  }
  return (
    <div>
      <div className="wave">
        <div className="header-item">
          <h3 className="ticket-booking">Train Ticket Booking</h3>
          
           <div className="img-div"><img src="https://gos3.ibcdn.com/irctcWithTxt-1668596751.svg" /></div> 
            <h3 className="ticket-booking-1" style={{ marginRight: "10%" }}>
            IRCTC Authorized Partner
          </h3>
        </div>
      
      <div className="content">
        <div className="content-data">
          <div className="content-data-top">
            <div>
              <input
                style={{ marginRight: "10px" }}
                type="radio"
                name="trip"
              ></input>
              Book Train tickets
            </div>
            <div>
              <input
                style={{ marginRight: "10px" }}
                type="radio"
                name="trip"
              ></input>
              Check PNR Status
            </div>
            <div>
              <input
                style={{ marginRight: "10px" }}
                type="radio"
                name="trip"
              ></input>
              Live Trains Status
            </div>
          </div>
          <div className="content-data-mid">
          <form onSubmit={handleForm}>
            <Box  sx={{display:"flex", gap:"20px"}}>
              <Grid >
                <TextField label="From" placeholder="Enter source" onChange={(e) => setFrom(e.target.value)} fullWidth required/>
              </Grid>
              <Grid>
                <TextField label="To" placeholder="Enter destination" onChange={(e) => setTo(e.target.value)} fullWidth required/>
              </Grid>
            <button style={{height:"20px", fontSize:"10px", borderRadius:"5px", backgroundColor:"green", color:"white"}}>TATKAL OPEN</button>
            <button style={{height:"20px", fontSize:"10px", borderRadius:"5px", backgroundColor:"green", color:"white"}}>TATKAL OPEN</button>
            <button style={{height:"20px", fontSize:"10px", borderRadius:"5px", backgroundColor:"green", color:"white"}}>TATKAL OPEN</button>
          
            </Box>
            <button className="search-train" >SEARCH TRAIN</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div className="train-part-bottom">
        <div className="main-part-1">1 million + customers</div>
        <div className="main-part-2">book train tickets with us because</div>
      </div>
      <div className="outer-part">
        <div className="first">
          <div className="one">No Cancellation Fee</div>
          <div className="two">
            You can opt for free cancellation &<br />
            get full refund.
          </div>
          <div style={{ color: "blue", fontWeight: "500" }}>
            Learn more about cancellation
          </div>
        </div>

        <div className="first">
          <div className="one">goConfirmed Trip</div>
          <div className="two">
            Guaranteed confirmed tickets or we
            <br /> give you 2x refund.
          </div>
          <div style={{ color: "blue", fontWeight: "500" }}>
            Learn more about goConfirmed
          </div>
        </div>

        <div className="first">
          <div className="one">No PG Fee via UPI</div>
          <div className="two">
            Zero Payment Gateway Charges
            <br /> via UPI mode
          </div>
        </div>
      </div>
    </div>

    // <>
    //   <div className="train-bg"></div>
    // </>
  );
};

export default Train;
