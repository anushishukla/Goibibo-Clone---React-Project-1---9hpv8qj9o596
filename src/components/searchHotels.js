import React, { useState} from "react";
import "../styles/searchHotel.css";
import SearchImage from "./Search.jpg";


const SearchHotel = () => {
    return (
      <>
        <div className="searchhotel-page">

           <div className="nav-search">
             <div style={{paddingLeft:"3%"}}>AREA, LANDMARK OR PROPERTY NAME</div>
             <div>CHECKIN</div>
             <div>CHECKOUT</div>
             <div>GUEST & ROOMS</div>
           </div>

           <div className="five-divs">
              <div className="f1"></div>
              <div className="f2">Feb 24, 2024</div>
              <div className="f3">Feb 25, 2024</div>
              <div className="f4">2 Adults  . 1 Room </div>
              <div className="f5">Update Search</div>
           </div>

        </div>

        <div className="other-divs">
            <div className="d1">Sort By :</div>
            <div  className="d2">Popularity</div>
            <div  className="d3">Price (Low to High)</div>
            <div  className="d4">Price (High to Low)</div>
            <div  className="d5">Customer Ratings</div>
            <div  className="d6">
              <div> <img src={SearchImage} /></div>
              Search Location or Property Name</div>
           </div>
        </>
    )
}
export default SearchHotel;

