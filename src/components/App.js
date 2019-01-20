import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer";

class App extends Component {
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
