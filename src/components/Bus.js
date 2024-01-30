import React from "react";
import "../styles/Bus.css";
const Bus = () => {
  return (
    <div className="bus-bg-1">
      <div className="bus-bg"> </div>
      <div>
        <div className="bus-page">
          <p className="hotel-item" style={{ marginLeft: "15%" }}>
            Bus Ticket Booking
          </p>
          <div className="hotel-part-top">
            <div className="bus-item-1">
              <div className="card-hotel">
                <div className="content-data-top">
                  <div>
                    <div className="form-1">
                      <div className="text">FROM</div>
                      <div className="source-part">ENTER SOURCE</div>
                    </div>

                    <div className="form-1">
                      <div className="text" style={{ marginTop: "25px" }}>
                        TO
                      </div>
                      <div className="source-part">ENTER DESTINATION</div>
                    </div>

                    <div
                      className="text-1"
                      style={{
                        paddingTop: "20px",
                        marginLeft: "10px",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      Travel Date
                    </div>
                    <div
                      className="source-part"
                      style={{
                        marginLeft: "10px",
                        color: "black",
                        fontSize: "18px",
                      }}
                    >
                      Jan 30,2024
                    </div>
                  </div>
                </div>

                <div className="travel">
                  <div>
                    {" "}
                    <img
                      src="https://gos3.ibcdn.com/social-distance-small-1592916992.png"
                      width="30px"
                      height="20px"
                    />
                  </div>
                  <span>Social Distancing</span> Introducing social distancing
                  in select buses.
                  <span style={{ color: "blue" }}>Know More</span>
                </div>
              </div>
              <div className="bus-item-2">
                <div className="green-div"></div>
                <div className="blue-div">
                  <div className="cards">
                    <img src="https://gos3.ibcdn.com/img-1701838393.jpg" />
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
            </div>
          </div>
          <div className="search-bus">SEARCH BUS</div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
