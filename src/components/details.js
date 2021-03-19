import React from "react";

const Details = props => {
    const {explanation} = props
    return (
        <div>
            <p>
                {explanation}
            </p>
        </div>
        
    )
}

export default Details;