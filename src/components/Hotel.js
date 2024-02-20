import React, { useState} from "react";
import "../styles/Hotel.css";
import searchImage from "../assets/search.png";
import { useNavigate } from "react-router-dom";


const Hotel = () => {
  const[hotel,setHotel] = useState("")

  const hotelSearch = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"add_any_city_name"}`,
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const results = await response.json();
    console.log(results);

    setHotel(results.data.hotels);

  }
  const navigate = useNavigate();

   const Hotels = () => {
      hotelSearch();
      navigate("/searchHotels")
   }
  

  return (
    <>
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
      <button className="search-hotel" onClick={Hotels} >SEARCH </button>

    </>
  );
};

export default Hotel;








// const [searchParams, setSearchParams] = useState({
//   location: "",

//   checkInDate: "",

//   checkOutDate: "",

//   guests: 1,

//   rooms: 1,
// });

// const [hotels, setHotels] = useState([]);

// const [loading, setLoading] = useState(false);

// const navigate = useNavigate();

// useEffect(() => {
//   if (searchParams.location) {
//     fetchHotels();
//   }
// }, [searchParams]);

// const fetchHotels = async () => {
//   setLoading(true);

//   try {
//     const response = await fetch(
//       `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchParams.location}"}`,
//       {
//         headers: { projectID: "yourProjectID" },
//       }
//     );

//     const data = await response.json();

//     setHotels(data.hotels || []);
//   } catch (error) {
//     console.error("Error fetching hotels:", error);

//     // Handle the error appropriately in your UI
//   } finally {
//     setLoading(false);
//   }
// };

// const handleSearch = (newSearchParams) => {
//   console.log(newSearchParams)
//   setSearchParams(newSearchParams);
  
// };