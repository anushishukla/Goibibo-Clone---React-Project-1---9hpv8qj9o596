import React, { useState, useEffect } from "react";
import "../styles/Flight.css";
import SearchTextField from "./UI Components/SearchBox";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SearchFlight = () => {
  const [flight, setFlight] = useState([]);
  const location = useLocation();
  const searchData = {
    source: location.state.sourceAirport,
    destination: location.state.destinationAirport,
  };
  console.log(searchData);
  console.log("sourceValue",searchData.source)
  console.log("destinationValue",searchData.destination)

  const [destinationAirport, setDestinationAirport] = useState("");
  const handleDestinationAirport = (airport_name) => {
    // handleCheckAirports(sourceAirport, airport_name);
    setDestinationAirport(airport_name);
    console.log(destinationAirport);
  };
  const [day, setDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDateChange = (event) => {
    console.log(event.target.value)
    setSelectedDate(event.target.value);
  };

  const flightSearch = async () => {

    const dateObject = new Date(selectedDate);

    const dayOfWeek = dateObject.getDay();
    const dayName = daysOfWeek[dayOfWeek];
    setDay(dayName);
    console.log("dayName =",day)
  

    const searchDataWithDestination = {
      ...searchData,

      destination: destinationAirport,
    };

    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search=${JSON.stringify(
        searchDataWithDestination
      )}&day=Mon`,

      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );

    const responseData = await response.json();

    console.log(responseData);

    setFlight(responseData.data.flights);
  };

  const navigate = useNavigate();

  const SearchFlight = () => {
    flightSearch();
    navigate("/update search", {
      // state: {
      //   airports: airports,
      //   sourceAirport: sourceAirport,
      //   destinationAirport: destinationAirport,
      //   day: day,
      // },
    });
  };

  const flightDetails = () => {
    navigate("/flight details", {
      
    })
  }

  useEffect(() => {
    flightSearch();
  }, []);

  return (
    <>
      {/* receiving the data */}
      <div>{location.state.sourceAirport}</div>
      <div>{location.state.destinationAirport}</div>
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
          {/* <div className="flight-form">
            <label for="text">FROM</label>
            <input className="information" type="text" placeholder="DEL" />
          </div> */}
          <div style={{ width: "35%", paddingLeft: "20px" }}>
            <SearchTextField
              label="From"
              placeholder="Enter city or airport"
              data={location.state.airports}
              onSearchData={handleDestinationAirport}
            />
          </div>
          <div style={{ width: "35%", paddingLeft: "20px" }}>
            <SearchTextField
              label="To"
              placeholder="Enter city or airport"
              data={location.state.airports}
              onSearchData={handleDestinationAirport}
            />
          </div>
          <div className="flight-form">
            <label for="text">DEPARTURE DATE</label>
            <input
                    type="date"
                    id="dateInput"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={today}
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
          <div className="update-btn" onClick={SearchFlight}>
            UPDATE SEARCH
          </div>
        </div>

        <div className="search-data">
          <div
            style={{ marginTop: "10px", color: "skyblue", marginLeft: "10px" }}
          >
            Fare Tye
          </div>

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
                <div>
                  <div className="multi">
                    <p style={{ marginLeft: "40px" }}>Multi Airline</p>
                    <p
                      style={{
                        marginRight: "30px",
                        backgroundColor: "green",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Cheapest
                    </p>
                  </div>

                  <div className="delhi-div">
                    <div style={{ marginBottom: "20px" }}>
                     {item.source}
                      {/* <span style={{ fontSize: "12px", color: "grey" }}>
                        {" "}
                        New Delhi India
                      </span> */}
                    </div>
                    <div>{item.source}-{item.destination}</div>
                    <div>
                     {item.destination}
                      {/* <span style={{ fontSize: "12px", color: "grey" }}>
                        Goa - Dabolim <br />
                        Airport, India
                      </span> */}
                    </div>
                    <div
                      style={{ marginLeft: "17%", marginTop: "20px" }}
                      className="btn"
                    >
                      VIEW FARES
                    </div>
                  </div>

                  <div className="time-div">

                    <div>{item.arrivalTime}</div>
                    <div>{item.duration}</div>
                    <div>{item.departureTime}</div>
                    <div>{item.ticketPrice}</div>
                  </div>

                  <div className="add-div">
                    <div style={{ color: "grey" }}>
                      Layovers - Guwahati 2h 00m, Bengaluru 0h 35m
                    </div>
                    <div style={{ color: "green" }}>
                      Get Rs.159 OFF on GISUPER; Extra 25 OFF on UPI
                    </div>
                  </div>

                  <div className="flight-btn" onClick={flightDetails}>Flight Details</div>
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
