import "../styles/App.css";
import Navbar from "./Navbar";
import SearchFlight from "./searchFlight";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Cab from "./Cab";
import Bus from "./Bus";
import BusResults from "./BusResults";
import BusProvider from "./BusProvider";
import HotelProvider from "./HotelProvider";

import Train from "./Train";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import SearchHotel from "./searchHotels";
// import SearchCab from "./searchCab";
import SearchTrain from "./searchTrain";
import TrainProvider from "./TrainProvider";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/hotel" element={<HotelProvider><Hotel /></HotelProvider>} />
        <Route path="/train" element={<TrainProvider><Train /></TrainProvider>} />
        {/* <Route path="/cab" element={<Cab />} /> */}
        <Route
          path="/bus"
          element={
            <BusProvider>
              <Bus />
            </BusProvider>
            
          }
        />
                <Route
          path="/bus/search/:query"
          element={
            <BusProvider>
              <BusResults />
            </BusProvider>
          }
        />
       
        <Route path="/login" element={<Login />} />
        <Route path="/searchflight" element={<SearchFlight />} />
        <Route path="/searchhotels" element={<HotelProvider><SearchHotel /></HotelProvider>} />
        {/* <Route path="/searchcab" element={<SearchCab />} /> */}
        <Route path="/searchTrain" element={<TrainProvider><SearchTrain /></TrainProvider>} />


      </Routes>
    </>
  );
}
export default App;
