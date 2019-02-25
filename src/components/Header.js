import React from "react";
import "./Header.css";

const Header = () => {
    const toGallery = () => {
        window.location = "#gallery";
    };

    return (
        <div className="header">
            <div className="container">
                <div className="content-box">
                    <h1 className="header-h1">
                        "Photograph: A picture painted by the sun without
                        instruction in art"
                    </h1>
                    <h2 className="header-h2">-Ambrose Bierce</h2>
                    <div>
                        <a href="#gallery">
                            <button className="header-button">Images</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
