// import React, { useContext, useEffect, useState } from 'react'
// import "../styles/searchTrain.css";

// const searchTrain = () => {

//     // const[source,destination] = useContext(TrainContext)

//     const[train,setTrain] = useState([])

//     const fetchTrain = async () => {
//         const response = await fetch(
//             `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"add_a_source","destination":"add_a_destination"}&day="add_a_day"`,
//             {
//               headers: { projectID: "9hpv8qj9o596" },
//             }
//           );
//           const result = await response.json()
//           console.log(result)
//         //   setTrain(result.data.train)
//     }
//     useEffect (() => {
//         fetchTrain()
//     })

//   return (
//   <>
  
//   <div className="searchtrain-page">
//         <div className="nav-search-train">
//           <div>
//             <label className="l1">FROM</label>
//             <br />
//             <input
//               id="train-from-1"
//               className="fr-1"
//               placeholder="Enter Source"
//             //   value={source}
//               required
//             />
//             <br />
//           </div>
//           <div>
//             <label className="l2">TO</label>
//             <br />
//             <input
//               id="train-from-2"
//               className="fr-2"
//               placeholder="Enter Destination"
//             //   value={destination}
//               required
//             />
//             <br />
//           </div>
//           <div>
//             <label className="l3">DEPARTURE DATE</label>
//             <br />
//             <input
//               id="train-from-3"
//               className="fr-3"
//               placeholder="Enter Date"
//               required
//             />
//             <br />
//           </div>
//         </div>
//         <div type="submit" className="update-btn">
//           UPDATE SEARCH
//         </div>
//       </div>
//   </>
//   )
// }

// export default searchTrain




import React, { useContext, useEffect, useState } from "react";
import TrainContext from "./TrainContext";
import "../styles/BusResult.css";
import { CheckBox, Label } from "@mui/icons-material";
import { Box, FormLabel, Input, TextField } from "@mui/material";

function searchTrain() {
  const { source, destination } = useContext(TrainContext);

  const [trains, setTrains] = useState([]);

  const handleResullt = async () => {
    const response = await fetch(
      ` https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day="add_a_day"`,
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const result = await response.json();
    console.log(result);
    // setTrains(result.data.trains);
  };

  useEffect(() => {
    handleResullt();
  }, []);
  return (
    <>
      <div className="searchbus-page">
        <div className="nav-search-bus">
          <div>
            <label className="l1">FROM</label>
            <br />
            <input
              id="bus-from-1"
              className="fr-1"
              placeholder="Enter Source"
              value={source}
              required
            />
            <br />
          </div>
          <div>
            <label className="l2">TO</label>
            <br />
            <input
              id="bus-from-2"
              className="fr-2"
              placeholder="Enter Destination"
              value={destination}
              required
            />
            <br />
          </div>
          <div>
            <label className="l3">DEPARTURE DATE</label>
            <br />
            <input
              id="bus-from-3"
              className="fr-3"
              placeholder="Enter Date"
              required
            />
            <br />
          </div>
        </div>
        <div type="submit" className="update-btn">
          Update Search
        </div>
      </div>

      <div className="bus-result-page">
        <div className="bus-page-container">
          <div className="filter-bus">
            <div className="bus-bus-filter">
              <div style={{ display: "flex" }}>
                <h4 style={{ marginLeft: "10px", color: "black" }}>Filters</h4>
                <div className="reset-bus">Reset All</div>
              </div>
              <div style={{ display: "flex", fontWeight: "500" }}>
                <p style={{ marginLeft: "10px", color: "black" }}>Popular</p>
                <div className="reset-bus">Reset</div>
              </div>

              <div
                style={{
                  display: "flex",
                  marginLeft: "40px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <CheckBox id="check" size="small" value="couple" />
                <div>GoDeal Discount</div>
              </div>

              <div
                style={{
                  display: "flex",
                  marginLeft: "40px",
                  marginTop: "10px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <CheckBox id="check" size="small" value="couple" />
                <div>Live Tracking</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "40px",
                  marginTop: "10px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <CheckBox id="check" size="small" value="couple" />
                <div>Free Concellation</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "40px",
                  marginTop: "10px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <CheckBox id="check" size="small" value="couple" />
                <div>Top Rated Buses</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "40px",
                  marginTop: "10px",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <CheckBox id="check" size="small" value="couple" />
                <div>Primo</div>
              </div>

              <div style={{ display: "flex", fontWeight: "500" }}>
                <p style={{ marginLeft: "10px", color: "black" }}>Bus Type</p>
                <div className="reset-bus">Reset</div>
              </div>

              <div style={{ display: "flex", fontSize: "12px", gap: "25%" }}>
                <div style={{ marginLeft: "20%" }}>AC</div>
                <div>Non-AC</div>
              </div>
              <div style={{ display: "flex", fontSize: "12px", gap: "25%" }}>
                <p style={{ marginLeft: "15%" }}>Seater</p>
                <p>Sleeper</p>
              </div>

              <div style={{ display: "flex", fontWeight: "500" }}>
                <p style={{ marginLeft: "10px", color: "black" }}>
                  Departure Time
                </p>
                <div
                  style={{
                    color: "grey",
                    marginLeft: "35%",
                    marginTop: "15px",
                  }}
                >
                  Reset
                </div>
              </div>

              <div style={{ display: "flex", fontSize: "12px", gap: "20px" }}>
                <div style={{ marginLeft: "10%" }}>12 midnight-6AM</div>
                <div>6 AM-12 noon</div>
              </div>
              <div style={{ display: "flex", fontSize: "12px", gap: "20px" }}>
                <p style={{ marginLeft: "10%" }}>12 noon-6 PM</p>
                <p>6 PM-12 midnight</p>
              </div>

              <div style={{ display: "flex", fontWeight: "500" }}>
                <p style={{ marginLeft: "10px", color: "black" }}>
                  Arrival Time
                </p>
                <div
                  style={{
                    color: "grey",
                    marginLeft: "35%",
                    marginTop: "15px",
                  }}
                >
                  Reset
                </div>
              </div>

              <div style={{ display: "flex", fontSize: "12px", gap: "20px" }}>
                <div style={{ marginLeft: "10%" }}>12 midnight-6AM</div>
                <div>6 AM-12 noon</div>
              </div>
              <div style={{ display: "flex", fontSize: "12px", gap: "20px" }}>
                <p style={{ marginLeft: "10%" }}>12 noon-6 PM</p>
                <p>6 PM-12 midnight</p>
              </div>

              <div style={{ display: "flex", fontWeight: "500" }}>
                <p style={{ marginLeft: "10px", color: "black" }}>
                  Boarding Point
                </p>
                <div
                  style={{
                    color: "grey",
                    marginLeft: "35%",
                    marginTop: "15px",
                  }}
                >
                  Reset
                </div>
              </div>
            </div>
          </div>

          <div className="hr-container-map">
            {trains.map((item, index) => {
              return (
                <div key={index} className="bus-card">
                  <div>
                    <h3 className="margin-0">{item.name}</h3>
                    <p className="bus-text1">{item.type}</p>
                    <p className="bus-ratingTag">{item.ratings}/5</p>
                  </div>

                  <div>
                    <h3 className="margin-0">{item.departureTime}</h3>
                    <p className="bus-text1">{item.source}</p>
                  </div>

                

                  <div>
                    <h3 className="margin-0">{item.arrivalTime}</h3>
                    <p className="bus-text1">{item.destination}</p>
                  </div>

                  <div className="bus-fare">
                    <h3 className="margin-0">&#8377; {item.fare}</h3>
                  </div>

                  <div className="select-bus">
                    <p className="bus-text1 margin-0">
                      Total Seats: {item.seats}
                    </p>
                    <button className="selectBus-btn">SELECT SEAT</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className="footer">
        <div className="footer-container">
          POPULAR BUS ROOTS
          <br />
          <div className="footer-path">
            {" "}
           Delhi to Manali Bus
            <br />
            Jaipur to Delhi Bus
            <br />
           Banglore to Goa Bus
            <br />
           Goa to Banglore Bus
            <br />
           Delhi to Jaipur Bus
           <br />
          Lucknow to Delhi Bus
            <br />
          Goa to Mumbai Bus
          <br />
          Goa to Shimla Bus
            <br />
          Patna to Pune Bus
          </div>
        </div>

        <div className="footer-container">
         POPULAR BUS CITIES
          <br />
          <div className="footer-path">
            Goa Bus Tickets
            <br />
           Jaipur Bus Tickets
            <br />
            Mumbai Bus Tickets
            <br />
            Gaziyabad Bus Tickets
            <br />
           Delhi Bus Tickets
            <br />
          Lucknow Bus Tickets
          <br />
          Kolkata Bus Tickets
          <br />
          Pune Bus Tickets
            
          </div>
          
        </div>

        <div className="footer-container">
          OUR PRODUCTS
          <br />
          <div className="footer-path">
            Domestic Hotels
            <br />
           International Hotels
            <br />
           Domestic Flights
            <br />
          International Flights
            <br />
           Bus Ticket Booking
            <br />
          Cab Booking
            <br />
          Train Ticket Booking
          </div>
        </div>

        <div className="footer-container">
         COMPANY
          <br />
          <div className="footer-path">
           About Us
            <br />
           Terms and Conditions
           <br />
          User  Agrement
            <br />
          Privacy
          <br />
          Careers
            <br />
          Goibibo on Mobile
          </div>
        </div>
      </div>
    </>
  );
}

export default searchTrain;
