import React, { useContext, useEffect, useState } from 'react'
import "../styles/searchTrain.css";

const searchTrain = () => {

    // const[source,destination] = useContext(TrainContext)

    const[train,setTrain] = useState([])

    const fetchTrain = async () => {
        const response = await fetch(
            `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"add_a_source","destination":"add_a_destination"}&day="add_a_day"`,
            {
              headers: { projectID: "9hpv8qj9o596" },
            }
          );
          const result = await response.json()
          console.log(result)
        //   setTrain(result.data.train)
    }
    useEffect (() => {
        fetchTrain()
    })

  return (
  <>
  
  <div className="searchtrain-page">
        <div className="nav-search-train">
          <div>
            <label className="l1">FROM</label>
            <br />
            <input
              id="train-from-1"
              className="fr-1"
              placeholder="Enter Source"
            //   value={source}
              required
            />
            <br />
          </div>
          <div>
            <label className="l2">TO</label>
            <br />
            <input
              id="train-from-2"
              className="fr-2"
              placeholder="Enter Destination"
            //   value={destination}
              required
            />
            <br />
          </div>
          <div>
            <label className="l3">DEPARTURE DATE</label>
            <br />
            <input
              id="train-from-3"
              className="fr-3"
              placeholder="Enter Date"
              required
            />
            <br />
          </div>
        </div>
        <div type="submit" className="update-btn">
          UPDATE SEARCH
        </div>
      </div>
  </>
  )
}

export default searchTrain