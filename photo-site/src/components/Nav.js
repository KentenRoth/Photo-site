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
                    <form>
                        <button onClick={toGallery()}>Images</button>
                    </form>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
