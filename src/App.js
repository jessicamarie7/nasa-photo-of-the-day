import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { API_KEY, BASE_URL } from "./constants";

function App() {

  const [imageData, setImageData] = useState('')

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  
  
  return (
    <div className="App">
      <header>
        <h1>Remembering you today, Dad</h1>
        <p>
          <span role="img" aria-label='go!'>🚀</span>as I always do when looking at the stars you loved so much! <span role="img" aria-label='go!'>🚀</span>
        </p>
        {/* <Date /> */}
      </header>
    </div>
  );
}

export default App;
