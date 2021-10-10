import React from "react"
import { Link } from "gatsby"
const NavBtn = function (props) {
    return (
        <Link to={props.route}>
            <button className="nav-btn">{props.name}</button>
        </Link>
    )
}

export default NavBtn
