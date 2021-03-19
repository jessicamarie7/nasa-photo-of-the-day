import React from "react";

const Picture = props => {
    const {url} = props
    console.log({url})
    return (
        <div className='pic-of-day'>
            <img src={url} alt='pic of the day'/>
        </div>
    )
}

export default Picture