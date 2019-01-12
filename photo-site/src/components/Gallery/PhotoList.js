import React from "react";
import Photo from "./Photo";
import "./PhotoList.css";

const PhotoList = props => {
    const photos = props.photos.map(photo => {
        return <Photo key={photo.id} photo={photo} />;
    });

    return <div className="margin">{photos}</div>;
};

export default PhotoList;
