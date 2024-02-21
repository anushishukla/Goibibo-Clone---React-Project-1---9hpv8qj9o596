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

           <div className="sidebar-div">

            <div className="filter-div">
               <div className="filter-1">FILTERS</div>
               <div className="filter-2">CLEAR</div>
            </div>
            
            <div className="p-div">
            <h4>Popular Filters</h4>
            <p style={{fontSize:"14px"}}>Couple-friendly Stays</p>
            <p style={{fontSize:"14px"}}>Top Rated Affordable Properties</p>
            <p style={{fontSize:"14px"}}>Book @</p>
            <p style={{fontSize:"14px"}}>Free Cancellation Available</p>
            <p style={{fontSize:"14px"}}>Free Breakfast Included</p>
            </div>

            <div className="p-div">
            <h4>Previously used Filters</h4>
            <p style={{fontSize:"14px"}}>Top Rated Affordable Properties</p>
            <p style={{fontSize:"14px"}}>Free Breakfast Included</p>
            <p style={{fontSize:"14px"}}>ree Cancellation Available</p>
            <p style={{fontSize:"14px"}}>Book @ ₹0</p>
            <p style={{fontSize:"14px"}}>Couple-friendly Stays</p>
            </div>

            <div className="p-div">
            <h4>Price Range</h4>
            <p style={{fontSize:"14px"}}>Upto ₹2000</p>
            <p style={{fontSize:"14px"}}>₹2001 - ₹4000</p>
            <p style={{fontSize:"14px"}}>Book @</p>
            <p style={{fontSize:"14px"}}>₹4001 - ₹6000</p>
            <p style={{fontSize:"14px"}}>₹6000 +</p>
            </div>

            <div className="p-div">
            <h4>Customer Ratings</h4>
            <p style={{fontSize:"14px", backgroundColor:"lightgreen", width:"30px", padding:"5px"}}>4.5+</p>
            <p style={{fontSize:"14px", backgroundColor:"lightgreen", width:"30px", padding:"5px"}}>4+</p>
            <p style={{fontSize:"14px", backgroundColor:"lightgreen", width:"30px", padding:"5px"}}>3.5+</p>
            <p style={{fontSize:"14px", backgroundColor:"lightgreen", width:"30px", padding:"5px"}}>3+</p>
           
            </div>

            <div className="p-div">
            <h4>Popular Locations</h4>
            <p style={{fontSize:"14px"}}>Karol bagh</p>
            <p style={{fontSize:"14px"}}>Lajpat Nagar</p>
            <p style={{fontSize:"14px"}}>Mehrauli</p>
            <p style={{fontSize:"14px", color:"blue"}}>Show All</p>
           
            </div>

            <div className="p-div">
            <h4>Star Rating</h4>
            <div style={{fontSize:"14px", color:"gold", fontWeight:"800", fontSize:"28px"}}>*****</div>
            <div style={{fontSize:"14px",color:"gold", fontWeight:"800", fontSize:"28px"}}>****</div>
            <div style={{fontSize:"14px",color:"gold", fontWeight:"800", fontSize:"28px"}}>***</div>
            <p style={{fontSize:"14px", color:"blue"}}>Show All</p>
           
            </div>

           </div>
        </>
    )
}
export default SearchHotel;

