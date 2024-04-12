import React, { useContext, useEffect, useState } from "react";
import "../styles/searchHotel.css";
import SearchImage from "./Search.jpg";
import HotelContext from "./HotelContext";

import { Hotel } from "@mui/icons-material";

const SearchHotel = () => {


   const[hotel,setHotel] = useState([]) 
  const { location } = useContext(HotelContext);


   const fetchHotels = async() => {
      const response = await fetch (`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}`,
     
      {
         headers: { projectID: "9hpv8qj9o596" },
       }
      );
      const result = await response.json()
      console.log(result)
      setHotel(result.data.hotels)
   }

   useEffect (() => {
      fetchHotels()
   },[])

  return (
    <>
    
      <div className="searchhotel-page">
        <div className="nav-search">
          <div>
            <label className="hotel-l1" > AREA, LANDMARK OR PROPERTY NAME</label>
            <br />
            <input
              id="hotel-from-1"
              className="fr-h1"
              placeholder="Enter Source"
              value={location}
              required
            />
            <br />
          </div>
          <div>
            <label className="hotel-l1" >CHECKIN</label>
            <br />
            <input
              id="hotel-from-2"
              className="fr-h2"
              placeholder="Enter Destination"
              // value={destination}
              required
            />
            <br />
          </div>
          <div>
            <label className="hotel-l1" >CHECKOUT</label>
            <br />
            <input
              id="hotel-from-3"
              className="fr-h3"
              placeholder="Enter Date"
              required
            />
            <br />
          </div>
          <div>
            <label className="hotel-l1">GUEST & ROOMS</label>
            <br />
            <input
              id="hotel-from-3"
              className="fr-h4"
              placeholder="Enter Date"
              required
            />
            <br />
          </div>
        </div>
        <div type="submit" className="update-hotel">
          Update Search
        </div>
      </div>

      <div className="other-divs">
        <div className="d1">Sor t By :</div>
        <div className="d2">Popularity</div>
        <div className="d3">Price (Low to High)</div>
        <div className="d4">Price (High to Low)</div>
        <div className="d5">Customer Ratings</div>
        <div className="d6">
          <div>
            {" "}
            <img src={SearchImage} />
          </div>
          Search Location or Property Name
        </div>
      </div>



       <div className="hotel-result-page">
      <div className="hotel-page-container">
      <div className="sidebar-div">
        <div className="filter-div">
          <div className="filter-1">FILTERS</div>
          <div className="filter-2">CLEAR</div>
        </div>

        <div className="p-div">
          <h4>Popular Filters</h4>
          <p style={{ fontSize: "14px" }}>Couple-friendly Stays</p>
          <p style={{ fontSize: "14px" }}>Top Rated Affordable Properties</p>
          <p style={{ fontSize: "14px" }}>Book @</p>
          <p style={{ fontSize: "14px" }}>Free Cancellation Available</p>
          <p style={{ fontSize: "14px" }}>Free Breakfast Included</p>
        </div>

        <div className="p-div">
          <h4>Previously used Filters</h4>
          <p style={{ fontSize: "14px" }}>Top Rated Affordable Properties</p>
          <p style={{ fontSize: "14px" }}>Free Breakfast Included</p>
          <p style={{ fontSize: "14px" }}>ree Cancellation Available</p>
          <p style={{ fontSize: "14px" }}>Book @ ₹0</p>
          <p style={{ fontSize: "14px" }}>Couple-friendly Stays</p>
        </div>

        <div className="p-div">
          <h4>Price Range</h4>
          <p style={{ fontSize: "14px" }}>Upto ₹2000</p>
          <p style={{ fontSize: "14px" }}>₹2001 - ₹4000</p>
          <p style={{ fontSize: "14px" }}>Book @</p>
          <p style={{ fontSize: "14px" }}>₹4001 - ₹6000</p>
          <p style={{ fontSize: "14px" }}>₹6000 +</p>
        </div>

        <div className="p-div">
          <h4>Customer Ratings</h4>
          <p
            style={{
              fontSize: "14px",
              backgroundColor: "lightgreen",
              width: "30px",
              padding: "5px",
            }}
          >
            4.5+
          </p>
          <p
            style={{
              fontSize: "14px",
              backgroundColor: "lightgreen",
              width: "30px",
              padding: "5px",
            }}
          >
            4+
          </p>
          <p
            style={{
              fontSize: "14px",
              backgroundColor: "lightgreen",
              width: "30px",
              padding: "5px",
            }}
          >
            3.5+
          </p>
          <p
            style={{
              fontSize: "14px",
              backgroundColor: "lightgreen",
              width: "30px",
              padding: "5px",
            }}
          >
            3+
          </p>
        </div>

        <div className="p-div">
          <h4>Popular Locations</h4>
          <p style={{ fontSize: "14px" }}>Karol bagh</p>
          <p style={{ fontSize: "14px" }}>Lajpat Nagar</p>
          <p style={{ fontSize: "14px" }}>Mehrauli</p>
          <p style={{ fontSize: "14px", color: "blue" }}>Show All</p>
        </div>

        <div className="p-div">
          <h4>Star Rating</h4>
          <div
            style={{
              fontSize: "14px",
              color: "gold",
              fontWeight: "800",
              fontSize: "28px",
            }}
          >
            *****
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "gold",
              fontWeight: "800",
              fontSize: "28px",
            }}
          >
            ****
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "gold",
              fontWeight: "800",
              fontSize: "28px",
            }}
          >
            ***
          </div>
          <p style={{ fontSize: "14px", color: "blue" }}>Show All</p>
        </div>
      </div>

      <div className="hr-container-map">
         {hotel.map((item,index) => {
           return(
            <div key={index} className="hotel-card">

              <div > <img src={item.images[0]}  width={200} height={200}/>
              <div className="img-gallery">
                      {item.images.map((img, index) => {
                        return (
                          <img key={index} className="hotel-img" src={img} />
                        );
                      })}
                    </div>
                    </div>
              <div style={{display:"flex", gap:"30%"}}>
                <p  style={{ fontSize:"12px", marginLeft:"20px", justifyContent:"space-between"}}>Hotel</p>
                <p className="hotel-rating">{item.rating}</p>
                <p style={{color:"green", fontSize:"12px"}}>{item.cancellationPolicy}</p>
              </div>

              <div style={{marginTop:"35px"}}>
                <h3 className="hotel-name">{item.name}</h3>
                <p  className="hotel-text1" >{item.location}</p>
                <p style={{fontSize:"12px", color:"red"}}>Couple Friendly</p>
              </div>
                   
                  <div>{item.price}</div>

            </div>
           )
         })}
      </div>

      </div>
      </div>


      <div className="footer">
        <div className="footer-container">
          TRENDING HOTEL CITIES
          <br />
          <div className="footer-path">
            {" "}
           Hotel in Delhi
            <br />
            Hotel in Goa
            <br />
            Hotel in Mumbai
            <br />
            Hotel in Patna
            <br />
            Hotel in Dehradun
           <br />
           Hotel in Kolkata
            <br />
            Hotel in Kanpur
          <br />
          Hotel in Kerala
            <br />
            Hotel in Banglore
          </div>
        </div>

        <div className="footer-container">
        TRENDING INTERNATIONAL HOTEL CITIES
          <br />
          <div className="footer-path">
           Hotels in India
            <br />
            Hotels in Bangkok
            <br />
            Hotels in Singapore
            <br />
            Hotels in Germany
            <br />
            Hotels in Itly
            <br />
            Hotels in America
          <br />
          Hotels in Japan
          <br />
          Hotels in Australia
            
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
};
export default SearchHotel;
