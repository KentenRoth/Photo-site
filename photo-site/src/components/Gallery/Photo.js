import React from "react";
import "./Photo.css";

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 11);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.photo;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <a href={this.props.photo.links.html}>
                    <img
                        ref={this.imageRef}
                        alt={description}
                        src={urls.small}
                    />
                </a>
            </div>
        );
    }
}

export default Photo;

//
