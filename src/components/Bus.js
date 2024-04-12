import React, { useState, useContext } from "react";
import "../styles/Bus.css";
import { useNavigate } from "react-router-dom";
// import { TextFields } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";
import BusContext from "./BusContext";


const Bus = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");


  const { setSource, setDestination } = useContext(BusContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSource(from);
    setDestination(to);

    navigate(`/bus/search/${from}-${to}`);
  };

  return (
    <div className="bus-bg-1">
      <div className="bus-bg"> </div>
      <div>
        <div className="bus-page">
          <p className="hotel-item" style={{ marginLeft: "15%" }}>
            Bus Ticket Booking
          </p>
          <div className="hotel-part-top">
            <div className="bus-item-1">
              <div className="card-bus">
                <form id="busForm" onSubmit={handleSubmit}>
                  <Box className="form-container" sx={{ width: "50%" }}>
                    <Grid container marginBottom={1}>
                      <Grid item padding={1} xs={12} ml={2} fontWeight={500}>
                        <TextField
                          label="From"
                          placeholder="Enter Source"
                          onChange={(e) => setFrom(e.target.value)}
                          variant="standard"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item padding={1} xs={12} ml={2}>
                        <TextField
                          label="To"
                          placeholder="Enter Destination"
                          onChange={(e) => setTo(e.target.value)}
                          variant="standard"
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <div
                    style={{
                      marginLeft: "20px",
                      fontWeight: "500",
                      color: "grey",
                      marginTop: "20px",
                    }}
                   
                  >
                    Travel Date
                  </div>

                  <div className="travel">
                  <div>
                    {" "}
                    <img
                      src="https://gos3.ibcdn.com/social-distance-small-1592916992.png"
                      width="30px"
                      height="20px"
                    />
                  </div>
                  <span>Social Distancing</span> Introducing social distancing
                  in select buses.
                  <span style={{ color: "blue" }}>Know More</span>
                </div>
                
                <button className="search-bus" type="submit" >SEARCH BUS</button>
                </form>
               
              </div>
              <div className="bus-item-2">
                <div className="green-div">
                  <div className="vaccine-img">
                    <div className="vaccine-div">
                      <img src="https://gos3.ibcdn.com/vacc-1642578631.png" />
                      Buses with vaccination Mandatory
                    </div>
                    <div className="paragraph">
                      Travel on buses that mandate covid vaccination{" "}
                    </div>
                  </div>
                </div>

                <div className="blue-div">
                  <div
                    className="bus-card-page"
                    style={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    <img src="https://gos3.ibcdn.com/img-1701838393.jpg" />
                    <div
                      className="part-1"
                      style={{ marginLeft: "30px", fontWeight: "500" }}
                    >
                      Up to 20% OFF* on bookings.
                      <br />
                    </div>
                    <div
                      className="part-2"
                      style={{
                        marginLeft: "30px",
                        fontSize: "14px",
                        marginTop: "10px",
                        paddingBottom: "20px",
                      }}
                    >
                      Valid till: Limited Period Offer
                    </div>
                  </div>

                  <div
                    className="bus-card-page"
                    style={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    <img src="https://gos3.ibcdn.com/img-1705898510.jpg" />
                    <div
                      className="part-1"
                      style={{ marginLeft: "30px", fontWeight: "500" }}
                    >
                      Up to 20% OFF* on bookings.
                      <br />
                    </div>
                    <div
                      className="part-2"
                      style={{
                        marginLeft: "30px",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      Valid till: Limited Period Offer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Bus;

//
