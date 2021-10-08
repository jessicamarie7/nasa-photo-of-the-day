import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";
import Date from "./components/Date";
import "./App.css";
import NasaImg from "./components/NasaImg";
import styled from "styled-components";
import Theme from "./components/Theme";

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: ${props => props.theme.colors.gray};

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: ${props => props.theme.colors.royalblue};
    text-shadow: 3px 3px #000000;
  }

  p {
    color: ${props => props.theme.colors.darkslategray};
    text-shadow: 1px 1px #000000;
  }
`

function App() {

  const [imageData, setImageData] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setImageData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  
  
  return (
    <Theme>
      <StyledApp>
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
      </StyledApp>
    </Theme>
  );
}

export default App;
