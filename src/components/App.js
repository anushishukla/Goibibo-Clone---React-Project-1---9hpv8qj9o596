import "../styles/App.css";
import Navbar from "./Navbar";
import SearchFlight from "./searchFlight";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Cab from "./Cab";
import Bus from "./Bus";
import Train from "./Train";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Flight />}/>
        <Route  path="/flight" element={<Flight />}/>
        <Route  path="/hotel" element={<Hotel />}/>
        <Route  path="/cab" element={<Cab />}/>
        <Route  path="/bus" element={<Bus />}/>
        <Route  path="/train" element={<Train />}/>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/searchflight" element={<SearchFlight />}/>

      </Routes>
      </>
  );
}
export default App;
