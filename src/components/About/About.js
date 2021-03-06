import React from "react";
import Equipment from "./Equipment";
import "./About.css";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="title-header">
                    <h1 className="title-h1">About Me</h1>
                </div>
                <div className="about-image">
                    <div className="image-box" />
                </div>
                <div className="about-words">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quia expedita assumenda, suscipit hic eos
                        beatae magnam qui maxime similique veritatis obcaecati
                        a! Est ullam aliquid magnam possimus culpa voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quia expedita assumenda, suscipit hic eos
                        beatae magnam qui maxime similique veritatis obcaecati
                        a! Est ullam aliquid magnam possimus culpa voluptatum.
                    </p>
                </div>
            </div>
            <Equipment />
        </div>
    );
};

export default About;
