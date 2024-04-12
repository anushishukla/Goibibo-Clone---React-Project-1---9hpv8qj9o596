import React, { useState } from "react";
import TrainContext from "../TrainContext";


const TrainProvider = ({ children }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState("Tue");

  return (
    <TrainContext.Provider
      value={{
        source,
        setSource,
        destination,
        setDestination,
        day,
        setDay,
      }}
    >
      {children}
    </TrainContext.Provider>
  );
};

export default TrainProvider;