import React from "react";
import Slider from "./Slider";
import Aboutus from "./Aboutus";
import Service from "./Service";
import Offer from "./Offer";
import Menu from "./Menu";
import Book from "./Book";
import Client from "./Client";
import ScrollTop from "./ScrollTop";

const Home = () => {
    return (
        <>
            <Slider />
            <Aboutus />
            <Service />
            <Offer />
            <Menu />
            <Book />
            <Client />
            <ScrollTop/>
        </>
    )
}

export default Home