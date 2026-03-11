import React from "react";
import ServiceProps from "./ServiceProps";
import { FaTruck, FaMugSaucer, FaAward, FaTable } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
    return (

        <>
            {/* Hero Section */}
            <div className="service-hero" style={{
                backgroundImage: "url(/Coffee-Website/assets/image/coffee.jpg)"
            }}>
                <div className="service-overlay">
                    <div className="container">
                        <div className="service-hero-content">
                            <h1>Services</h1>

                            <div className="breadcrumb">
                                <Link to="/">Home</Link>
                                <span>/</span>
                                <Link to="/Services" className="text">Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-main">
                <div className="container">
                    <div className="service-inner">
                        <div className="service-title">
                            <span className="title-line"></span>
                            <h4>Our Services</h4>
                            <h1>Fresh & Organic Beans</h1>
                        </div>
                        <div className="service-contain">
                            <ServiceProps img={process.env.PUBLIC_URL + "/assets/image/service-1.jpg"} icon={<FaTruck />} title={"Fastest Door Delivery"} text={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
                            <ServiceProps img={process.env.PUBLIC_URL + "/assets/image/service-2.jpg"} icon={<FaMugSaucer />} title={"Fresh Coffee Beans"} text={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
                            <ServiceProps img={process.env.PUBLIC_URL + "/assets/image/service-3.jpg"} icon={<FaAward />} title={"Best Quality Coffee"} text={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
                            <ServiceProps img={process.env.PUBLIC_URL + "/assets/image/service-4.jpg"}icon={<FaTable />} title={"Online Table Booking"} text={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services