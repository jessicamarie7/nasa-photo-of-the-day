import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../constants";


export default function NasaImg() {
    const [theImg, setTheImg] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
            .then(res => {
                setTheImg(res.data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='container'>
            <img src={theImg} />
        </div>
    )
}