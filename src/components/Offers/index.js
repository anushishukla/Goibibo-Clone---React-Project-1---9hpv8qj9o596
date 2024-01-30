import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import "./index.css";

function Offers() {
  const [offers, setOffers] = useState([]);
  const [active, setActive] = useState("All");

  const offerListItem = ["All", "Flights", "Hotels", "Cabs", "Rails"];

  const fetchOffers = async (item) => {
    const value = item.toUpperCase();

    var url = `https://academics.newtonschool.co/api/v1/bookingportals/offers?`;

    if (value === "ALL") {
      url += "limit=50";
    } else {
      url += `filter={"type":"${value}"}`;
    }

    const response = await fetch(url, {
      headers: { projectID: "t8tjlydler4b" },
    });

    const results = await response.json();
    setOffers(results.data.offers);
  };

  const handleChangeOffer = (item) => {
    setActive(item);
    fetchOffers(item);
  };

  useEffect(() => {
    fetchOffers("ALL");
  }, []);

  return (
    <div className="sub-container">
      <Box className="form-container" sx={{ width: "95%", marginTop: 6 , marginLeft: 3 , marginRight: 5}}>
        <h2 className="offer-heading">Offers For You</h2>
        <ul className="offer-list">
          {offerListItem.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleChangeOffer(item)}
                className={
                  active === `${item}` ? "active-list-item" : "offer-list-item"
                }
              >
                {item}
              </li>
            );
          })}
        </ul>

        <div className="oc-container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {offers.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="oc-header">
                    <div className="oc-img">
                      <img
                        style={{ borderRadius: "6px" }}
                        width={125}
                        height={125}
                        src={item.newHeroUrl}
                      />
                    </div>
                    <div className="offer-card-body">
                      <div className="oc-text">
                        <h4 className="oc-heading">{item.lobDisplayText}</h4>
                        <p className="oc-text1">{item.pTl}</p>
                        <p className="oc-text2">{item.pTx}</p>
                      </div>
                    </div>
                  </div>
                  <div className="oc-footer">
                    <button className="oc-btn">{item.ctaText}</button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Box>
    </div>
  );
}

export default Offers;
