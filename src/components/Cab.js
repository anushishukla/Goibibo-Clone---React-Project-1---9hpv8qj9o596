// import { Box, Grid, TextField } from '@mui/material';
// import "../styles/Cab.css";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import CabContext from "./CabContext";


// const Cab = () => {

// const[from,setFrom] = useState("")
// const[to,setTo] = useState("")

// // const { setSource, setDestination } = useContext(CabContext);


// const navigate = useNavigate()

// const handleSubmit = (e) => {
//  e.preventDefault()

// //  setSource(from)
// //  setDestination(to)

// navigate("/searchCab");


 
// }


// return (

// <>
// <div className='cab-bg-1'>
// <div className='cab-bg'>
//     <div>
//     <div className="cab-page">
//           <p className="cab-item" style={{ marginLeft: "15%" }}>
//            Book online Cab
//           </p>
//           <div className="cab-part-top">
//             <div className="cab-item-1">
//               <div className="card-cab">
//                 <form id="cabForm" onSubmit={handleSubmit}>
//                   <Box className="form-container" sx={{ width: "50%" }}>
//                     <Grid container marginBottom={1}>
//                       <Grid item padding={1} xs={12} ml={2} fontWeight={500}>
//                         <TextField
//                           label="From"
//                           placeholder="Enter Source"
//                           onChange={(e) => setFrom(e.target.value)}
//                           variant="standard"
//                           fullWidth
//                           required
//                         />
//                       </Grid>
//                       <Grid item padding={1} xs={12} ml={2}>
//                         <TextField
//                           label="To"
//                           placeholder="Enter Destination"
//                           onChange={(e) => setTo(e.target.value)}
//                           variant="standard"
//                           fullWidth
//                           required
//                         />
//                       </Grid>
//                     </Grid>
//                   </Box>
                  

//                   <div style={{display:"flex", gap:"52%"}}>
//                   <div
//                     style={{
//                       marginLeft: "20px",
//                       fontWeight: "500",
//                       color: "grey",
//                       marginTop: "20px",
//                     }}
                   
//                   >
//                     Pickup Date
//                   </div>
//                   <div
//                     style={{
//                       marginLeft: "20px",
//                       fontWeight: "500",
//                       color: "grey",
//                       marginTop: "20px",
//                     }}
                   
//                   >
//                     Pickup Time
//                   </div>
//                   </div>
                
//                 <button className="search-cab" type="submit" >SEARCH CABS</button>
//                 </form>
               
//               </div>
             
//             </div>
//           </div>
      
//         </div>
//     </div>
// </div>


// </div>
// </>

// );

// };

// export default Cab;








