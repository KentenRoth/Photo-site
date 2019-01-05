import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Gallary from "./Gallary";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <About />
                <Gallary />
                <Footer />
            </div>
        );
    }
}

export default App;
