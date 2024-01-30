import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Offers from "./Offers";
import SearchTextField from "./UI Components/SearchBox";
const Flight = () => {
  const [airports, setAirports] = useState([]);

  const [sourceAirport, setSourceAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");

  const handleSourceAirport = (airport_name) => {
    handleCheckAirports(airport_name, destinationAirport);
    setSourceAirport(airport_name);
  };

  const handleDestinationAirport = (airport_name) => {
    handleCheckAirports(sourceAirport, airport_name);
    setDestinationAirport(airport_name);
  };

  const fetchAirpots = async () => {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/bookingportals/airport",
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const results = await response.json();
    console.log(results);

    setAirports(results.data.airports);
  };

  useEffect(() => {
    fetchAirpots();
  }, []);
  return (
    <>
      <div style={{ height: "350px" }}>
        <div className="header">
          <div className="domestic-text">
            Domestic and International Flights
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
                  One-way
                </div>
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  Round-trip
                </div>
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  Multi-city
                </div>
              </div>
              <div className="content-data-mid">
                <div style={{width:"50%"}}>
                  <SearchTextField
                    label="From"
                    placeholder="Enter city or airport"
                    data={airports}
                    onSearchData={handleSourceAirport}
                  />
                </div>
                <div style={{width:"50%"}}>
                  <SearchTextField
                    label="To"
                    placeholder="Enter city or airport"
                    data={airports}
                    onSearchData={handleDestinationAirport}
                  />
                </div>
              </div>
              <div className="content-data-lower">
                <div>
                  Select A<br />
                  Fare Type:
                </div>
                <div className="profession">
                  <input
                    style={{ marginRight: "5px" }}
                    type="radio"
                    name="profession"
                  ></input>
                  Regular
                </div>
                <div className="profession">
                  <input
                    style={{ marginRight: "5px" }}
                    type="radio"
                    name="profession"
                  ></input>
                  Armed Forces
                </div>
                <div className="profession">
                  <input
                    style={{ marginRight: "5px" }}
                    type="radio"
                    name="profession"
                  ></input>
                  Senior Citizen
                </div>
                <div className="profession">
                  <input
                    style={{ marginRight: "5px" }}
                    type="radio"
                    name="profession"
                  ></input>
                  Student
                </div>
                <div className="profession">
                  <input
                    style={{ marginRight: "5px" }}
                    type="radio"
                    name="profession"
                  ></input>
                  Doctors & Nurses
                </div>
              </div>
            </div>
          </div>
          <div className="search-flights">SEARCH FLIGHTS</div>
        </div>
      </div>

      <div style={{ width: "60%", margin: "0 auto" }}>
        <img
          className="img-item"
          src="https://platforms.makemytrip.com/contents/4ba44448-b8c2-468b-afc8-d9a208d23682"
        />
      </div>
      <Offers />

      <div className="bottom-border">
        <img src="https://gos3.ibcdn.com/gosafe-1654247477.svg" />
        <div className="text-much">
          Read the latest domestic & International guidelines here before you
          travel. Stay safe, travel safe. <span>Read more</span>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container">
          OUR PRODUCTS
          <br />
          <div className="footer-path">
            {" "}
            Domestic Hotels
            <br />
            International Hotels
            <br />
            Domestic Flights
            <br />
            Multi-City Flights
            <br />
            Bus Booking
          </div>
        </div>

        <div className="footer-container">
          ABOUT US
          <br />
          <div className="footer-path">
            About Us
            <br />
            Invester Relations
            <br />
            Management
            <br />
            Terms of Services
          </div>
        </div>

        <div className="footer-container">
          TRAVEL ESSENTIAL
          <br />
          <div className="footer-path">
            PNR Status
            <br />
            Offers
            <br />
            Airlines Routes
          </div>
        </div>

        <div className="footer-container">
          MORE LINKS
          <br />
          <div className="footer-path">
            Cheap Flights
            <br />
            Hotels Near Me
          </div>
        </div>
      </div>
    </>
  );
};
export default Flight;
