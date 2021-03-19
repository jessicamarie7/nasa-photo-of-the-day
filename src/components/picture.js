import React from "react";

const picture = props => {
    const {url} = props
    return (
        <div>
            <img>
                {url}
            </img>
        </div>
    )
}

export default picture