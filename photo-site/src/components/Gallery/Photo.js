import React from "react";
import "./Photo.css";

class Photo extends React.Component {
    render() {
        const { description, urls, user } = this.props.photo;
        const { profile_image, name, portfolio_url } = this.props.photo.user;
        return (
            <div className="photo-card">
                <div className="card-content">
                    <div className="row">
                        <div className="col-9">
                            <img alt={description} src={urls.thumb} />
                        </div>

                        <div className="col-3">
                            <p>{name}</p>

                            <a href={this.props.photo.links.html}>
                                Unspash Site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;
