import React from "react";

const details = props => {
    const {explanation} = props
    return (
        <div>
            <p>
                {explanation}
            </p>
        </div>
        
    )
}

export default details;