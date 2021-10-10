import React from "react"
import NavBtn from "./NavBtn"

const Head = function () {
    return (
        <div className="head-container">
            <div className="head-title">
                <h1 className="title-text">Portfolio Site</h1>
            </div>
            <div className="head-flexbox">
                <NavBtn name="Home" route="/"></NavBtn>
                <NavBtn name="Projects" route="/projects"></NavBtn>
                <NavBtn name="Contact Me" route="/contact"></NavBtn>
            </div>
        </div>
    )
}

export default Head
