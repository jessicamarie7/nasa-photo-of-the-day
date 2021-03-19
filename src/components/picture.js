import React from "react";

const Picture = props => {
    const {url} = props
    return (
        <div>
            <img>
                {url}
            </img>
        </div>
    )
}

export default Picture