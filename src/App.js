import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL } from './constants/index'
import Date from "./components/date"
import Title from "./components/title"
import Picture from "./components/picture"
import Copyright from "./components/copyright"
import Details from "./components/details"
import styled from 'styled-components';

const WrapperDiv = styled.div`
  padding: 
`;



function App() {
  const [data, setData] = useState({})

useEffect(() => {
  axios.get(`${BASE_URL}`)
    .then(res => {
      console.log(res)
      setData(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
}, [])

  return (
    <WrapperDiv>
      <Date date = {data.date}/>
      <Title title = {data.title}/>
      <Picture url = {data.url}/>
      <Copyright copyright = {data.copyright}/>
      <Details explanation = {data.explanation}/>
    </WrapperDiv>
  );
}

export default App;
