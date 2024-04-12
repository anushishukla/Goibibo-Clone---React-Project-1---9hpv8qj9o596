import React, { useState } from "react";
import HotelContext from "../HotelContext";


const HotelProvider = ({ children }) => {
  const [location, setLocation] = useState("");

  const [day, setDay] = useState("Tue");

  return (
    <HotelContext.Provider
      value={{
        location,
        setLocation,
        day,
        setDay,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;