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
                orientation: "landscape",
                per_page: 4
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
                <div className="big-container">
                    <div className="row">
                        <div className="col-9" />
                        <div className="col-3">
                            <PhotoList photos={this.state.images} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallary;
