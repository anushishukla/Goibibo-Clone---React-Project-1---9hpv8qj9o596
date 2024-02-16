import React, { useState } from "react";
import "../styles/Hotel.css";
import searchImage from "../assets/search.png";

const Hotel = () => {

  const [location, setLocation] = useState('');
  const [hotels, setHotels] = useState([])

  const searchHotels = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}`, {
        headers: {
          'Authorization': 'Bearer YOUR_JWT_TOKEN',
          'projectID': '24a1f8322dd4'
        }
      });

      setHotels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzBmNWU1Nzc2ZGY2NjJkMTBmOWU3YSIsImlhdCI6MTcwNzE0NDY3NywiZXhwIjoxNzM4NjgwNjc3fQ.yKugSCeH3mYDXSFPh5xlGmgzOu7NZTgFewe0o75MwtQ"

  return (
    <>
      <div>
      <input
       type="text"
        placeholder="Enter city name"
         value={location}
          onChange={(e) => setLocation(e.target.value)} />

      <button onClick={searchHotels}>Search </button>

      {hotels.map((hotel) => (
        <div key={hotel.id}>
        
          {hotel.name}, {hotel.location}, {hotel.price}
        </div>
      ))}
    </div>
  



      <div className="hotel-bg"> </div>

      <div className="hotel-page">
        <p className="hotel-item" style={{ marginLeft: "15%" }}>
          Book Hotels and Homestays
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "Center",
            justifyContent: "space-around",
          }}
        >
          <div className="hotel-part-top">
            <div className="card-hotel">
              <div className="content-data-top">
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  India
                </div>
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  International
                </div>
              </div>
              <div className="item">Where</div>
              <div className="item-cards">
                <img src={searchImage} alt="search" />
                <div className="aerocity" style={{ marginTop: "6px" }}>
                  Aerocity, Delhi
                </div>
              </div>
              <div className="checkin">
                <div className="first">
                  <div className="item-cards-1">Check-in</div>
                  <div className="item-cards-2">Dec 12,2023</div>
                </div>
                <div className="first-part">
                  <div className="button">1 Night</div>
                  <div className="second">
                    <div className="item-cards-1">Check-out</div>
                    <div className="item-cards-2">Dec 13,2023</div>
                  </div>
                </div>
              </div>
              <div className="item-cards-3">Guests & Rooms</div>
              <div className="item-cards-2">2 Adults | 1 Room</div>
            </div>
          </div>

          <div className="cards">
            <img src="https://gos3.ibcdn.com/img-1705898510.jpg" />
            <div
              className="part-1"
              style={{ marginLeft: "20px", fontWeight: "500" }}
            >
              Up to 20% OFF* on bookings.
              <br />
            </div>
            <div
              className="part-2"
              style={{
                marginLeft: "20px",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Valid till: Limited Period Offer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
