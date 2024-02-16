import React, { useState , useEffect} from "react";
import "../styles/Flight.css";

const SearchFlight = () => {
  const [flight, setFlight] = useState([]);

  const flightSearch = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"Del","destination":"Bom"}&day=Mon`,
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const responseData = await response.json();
    console.log(responseData);

    setFlight(responseData.data.flights);
  };

  // useEffect(() => {
  //   flightSearch();
  // }, []);

  return (
    <>
      <div className="flight-page">
        <div className="flight-data">
          <div>
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              name="trip"
            ></input>
            ONE WAY TRIP
          </div>
          <div>
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              name="trip"
            ></input>
            ROUND TRIP
          </div>
        </div>

        <div className="form-items">
          <div className="flight-form">
            <label for="text">FROM</label>
            <input className="information" type="text" placeholder="DEL" />
          </div>
          <div className="flight-form">
            <label for="text">TO</label>
            <input className="information" type="text" placeholder="AUH" />
          </div>
          <div className="flight-form">
            <label for="text">DEPARTURE DATE</label>
            <input
              className="information"
              type="text"
              placeholder="05 Dec'23"
            />
          </div>
          <div className="flight-form">
            <label for="text">RETURN DATE</label>
            <input
              className="information"
              type="text"
              placeholder="Travel Dates"
            />
          </div>
          <div className="flight-form">
            <label for="text">PASSENGER & CLASS</label>
            <input
              className="information"
              type="text"
              placeholder="1Traveller(s),Economy"
            />
          </div>
          <div className="update-btn" onClick={flightSearch}>
            UPDATE SEARCH
          </div>
        </div>

        <div className="search-data">
        <div style={{marginTop:"10px", color:"skyblue", marginLeft:"10px"}}>Fare Tye</div>

          <div className="profession-search">
            <input type="radio" name="profession"></input>
            Regular
          </div>
          <div className="profession-search">
            <input type="radio" name="profession"></input>
            Armed Forces
          </div>
          <div className="profession-search">
            <input
              style={{ marginRight: "5px" }}
              type="radio"
              name="profession"
            ></input>
            Senior Citizen
          </div>
          <div className="profession-search">
            <input
              style={{ marginRight: "5px" }}
              type="radio"
              name="profession"
            ></input>
            STUDENT
          </div>
          <div className="profession-search">
            <input
              style={{ marginRight: "5px" }}
              type="radio"
              name="profession"
            ></input>
            Doctors & Nurses
          </div>
        </div>
      </div>
      
             
      <div>

        <div>

          {flight.length > 0 ? (
            flight.map((item) => (
              <div className="flight-container" key={item._id}>
                <div >
                <div className="multi">
                <p style={{marginLeft:"40px"}}>Multi Airline</p>
                <p style={{marginRight:"30px", backgroundColor:"green", color:"white", padding:"5px"}}>Cheapest</p>
                </div>

                <div className="delhi-div">
                <div style={{marginBottom:"20px"}}>DEL<span style={{fontSize:"12px", color:"grey"}}> New Delhi India</span></div>
                <div>-GAU-BLR-</div>
                <div>GOI <span style={{fontSize:"12px", color:"grey"}}>Goa - Dabolim <br/>Airport, India</span></div>
                <div style={{marginLeft:"17%", marginTop:"20px" }} className="btn">VIEW FARES</div>
               
                </div>
                
                <div className="time-div">
                <div>07:20</div>
                <div>9h 45m</div>
                <div>17:05</div>
                <div>6,639</div>
                </div>

                <div className="add-div">
                  <div style={{color:"grey"}}>Layovers - Guwahati 2h 00m, Bengaluru 0h 35m</div>
                  <div style={{color:"green"}}>Get Rs.159 OFF on GISUPER; Extra 25 OFF on UPI</div>
                </div>

                <div className="flight-btn">Flight Details</div>

               </div>
              </div>
              
            ))
          ) : (
            <p>No flights available</p>
          )}
        </div>

      </div>

    </>
  );
};
export default SearchFlight;
