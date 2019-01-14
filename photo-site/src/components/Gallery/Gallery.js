import React, { Component } from "react";
import unsplash from "../../apis/unsplash";
import PhotoList from "./PhotoList";
import "./Gallery.css";

class Gallary extends Component {
    state = { images: [] };

    async componentDidMount() {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: "mountains",
                per_page: 16
            }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div id="gallery">
                <div className="container">
                    <div className="title-header">
                        <h1>Gallery Section</h1>
                    </div>
                </div>
                <div className="gallery-container">
                    <PhotoList photos={this.state.images} />
                </div>
            </div>
        );
    }
}

export default Gallary;
