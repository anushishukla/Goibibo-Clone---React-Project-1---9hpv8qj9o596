import React from "react";
import "../styles/Flight.css";


const Home = () => {
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
                <input className="information" type="text" placeholder="DEL"/>
              </div>
              <div className="flight-form">
                <label for="text">TO</label>
                <input className="information" type="text" placeholder="AUH"/>
              </div>
              <div className="flight-form">
                 <label for="text">DEPARTURE DATE</label>
                 <input className="information" type="text" placeholder="05 Dec'23"/>
              </div>
              <div className="flight-form">
                <label for="text">RETURN DATE</label>
                <input className="information" type="text" placeholder="Travel Dates"/>
              </div>
              <div className="flight-form">
                <label for="text">PASSENGER & CLASS</label>
                <input className="information" type="text" placeholder="1Traveller(s),Economy"/>
              </div>
              <div className="update-btn">UPDATE SEARCH</div>
            </div>

            <div className="content-data-lower">
             
              <div className="profession">
                <input
                 
                  type="radio"
                  name="profession"
                ></input>
                Regular
              </div>
              <div className="profession">
                <input
                 
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
        

        </>
    )
}
export default Home;