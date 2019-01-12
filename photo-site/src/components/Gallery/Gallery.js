import React, { Component } from "react";
import unsplash from "../../apis/unsplash";
import PhotoList from "./PhotoList";
import "./Gallery.css";

class Gallary extends Component {
    state = { images: [] };

    async componentDidMount() {
        const response = await unsplash.get("/search/photos", {
            params: { query: "nature", orientation: "landscape" }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div id="gallery">
                <h1>Gallery Section</h1>
                <PhotoList photos={this.state.images} />
            </div>
        );
    }
}

export default Gallary;
