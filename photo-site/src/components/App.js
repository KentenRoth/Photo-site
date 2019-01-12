import React, { Component } from "react";
import unsplash from "../apis/unsplash";
import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
    state = { images: [] };

    async componentDidMount() {
        const response = await unsplash.get("/search/photos", {
            params: { query: "nature" }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <About />
                <Gallery />
                <Footer />
            </div>
        );
    }
}

export default App;
