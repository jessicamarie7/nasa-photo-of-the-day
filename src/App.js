import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";
import Date from "./components/Date";
import "./App.css";
import NasaImg from "./components/NasaImg";

function App() {

  // const [imageData, setImageData] = useState(null)

  // useEffect(() => {
  //   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  //     .then(res => {
  //       setImageData(res.data)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }, [])
  
  
  return (
    <div className="App">
      <header>
        <h1>Remembering you today, Dad</h1>
        <p>
          <span role="img" aria-label='go!'>🚀</span>as I always do when looking at the stars you loved so much! <span role="img" aria-label='go!'>🚀</span>
        </p>
        <Date />
      </header>
      <div className="todays-image">
        <NasaImg />
      </div>
    </div>
  );
}

export default App;
