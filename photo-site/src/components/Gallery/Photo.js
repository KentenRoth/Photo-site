import React from "react";
import "./Photo.css";

class Photo extends React.Component {
    render() {
        const { description, urls } = this.props.photo;
        return (
            <div>
                <img alt={description} src={urls.thumb} />
            </div>
        );
    }
}

export default Photo;
