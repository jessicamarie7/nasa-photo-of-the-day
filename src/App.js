import React, { useState, useEffect } from "react";
import "./App.css";
import axios from axios
import { BASE_URL } from './constants/index'
import Date from "./components/date"
import Title from "./components/title"
import Picture from "./components/picture"
import Copyright from "./components/copyright"
import Details from "./components/details"



function App(prop) {
  const [data, setData] = useState({})

useEffect(() => {
  axios.get(`${BASE_URL}/`)  //add api?
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, [])

  return (
    <div className="theApp">
      <Date date = {data.date}/>
      <Title title = {data.title}/>
      <Picture picture = {data.url}/>
      <Copyright copyright = {data.copyright}/>
      <Details details = {data.explanation}/>
    </div>
  );
}

export default App;
