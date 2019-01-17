import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="title-header footer">
            <div className="container">
                <div className="footer-content">
                    <p>This site was built with React using the Unsplash API</p>
                    <br />
                    <p>
                        If you would like to know more about the images in the
                        gallery please click on one, and it will take you to
                        Unpslash to learn more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
