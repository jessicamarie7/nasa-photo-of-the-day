import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../constants";


export default function Date() {

    const [theDate, setTheDate] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
            .then(res => {
                setTheDate(res.data.date)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='container'>
            <h2>Today's Date: {theDate}</h2>
        </div>
    )
}
