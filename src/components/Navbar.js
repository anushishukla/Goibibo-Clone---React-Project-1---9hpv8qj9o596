import React from "react";
import "../styles/Navbar.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flightImage from "../assets/flight.png";
import hotelImage from "../assets/hotel.png";
import trainImage from "../assets/train.png";
import cabImage from "../assets/cab.png";
import busImage from "../assets/bus.png";
import holidayImage from "../assets/holiday.png";
import forexImage from "../assets/forex.png";
import insauranceImage from "../assets/insaurance.png";

const Navbar = () => {

  const navigate = useNavigate()
  
  return (
    <nav className="nav-container">
      <span className="website-name">
        <NavLink to={`/flight`}>
          <span>go</span>
          <span style={{ color: "blue" }}>ibibo</span>
        </NavLink>
      </span>
      <ul className="navbar">
        <li className="nav-items">
          <img src={flightImage} alt="Flight" />
          <NavLink to={`/flight`}>Flights</NavLink>
        </li>

        <li className="nav-items">
          <img src={hotelImage} alt="hotel" />
          <NavLink to={`/hotel`}>Hotels</NavLink>
        </li>

        <li className="nav-items">
          <img src={trainImage} alt="train" />
          <NavLink to={`/train`}>Trains</NavLink>
        </li>

        <li className="nav-items">
          <img src={cabImage} alt="cab" />
          <NavLink to={`/cab`}>Cabs</NavLink>
        </li>

        <li className="nav-items">
          <img src={busImage} alt="bus" />
          <NavLink to={`/bus`}>Bus</NavLink>
        </li>

        <li className="nav-items">
          <img src={holidayImage} alt="holiday" />
          <NavLink to={`/holiday`}>Holidays</NavLink>
        </li>

        <li className="nav-items">
          <img src={forexImage} alt="forex" />
          <NavLink to={`/forex`}>Forex</NavLink>
        </li>

        <li className="nav-items">
          <img src={insauranceImage} alt="insaurance" />
          <NavLink to={`/insaurance`}>Insaurance</NavLink>
        </li>
      </ul>

      <div className="myTrip-nav-items">
        <span style={{ fontSize: "12px" }}>My Trips</span>
        <br />
        <span style={{ color: "black" }}>Manage Booking</span>
      </div>
      <button className="login-signup" onClick={() => navigate(`/login`)}>LOGIN / SIGNUP</button>
    </nav>
  );
};
export default Navbar;
