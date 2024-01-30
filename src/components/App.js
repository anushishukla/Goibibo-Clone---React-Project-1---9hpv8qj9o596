import "../styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Cab from "./Cab";
import Bus from "./Bus";
import Train from "./Train";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/flight" element={<Flight />}/>
        <Route  path="/hotel" element={<Hotel />}/>
        <Route  path="/cab" element={<Cab />}/>
        <Route  path="/bus" element={<Bus />}/>
        <Route  path="/train" element={<Train />}/>
      </Routes>
      </>
  );
}
export default App;
