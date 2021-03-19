import React from "react";

const title = props => {
    const {title} = props
    return (
        <div>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default title