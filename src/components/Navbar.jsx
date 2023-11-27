import { Link, NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="src/assets/home-icon.png" />
            </Link>
        </nav>

    )


}

export default Navbar;
