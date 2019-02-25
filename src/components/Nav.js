import React from "react";
import "./Nav.css";

const Nav = () => {
    const toGallery = () => {
        window.location = "#gallery";
    };

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
                    <a href="#gallery">
                        <button>Images</button>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
