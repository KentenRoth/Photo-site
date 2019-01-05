import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="home">
                    <a href="../">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <button>Images</button>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
