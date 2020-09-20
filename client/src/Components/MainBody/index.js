import React from "react"
import "./index.css"

function MainBody(props) {

    return (
        <div className="main-sec about-us-section">
            {props.children}
        </div>
    )
}

export default MainBody