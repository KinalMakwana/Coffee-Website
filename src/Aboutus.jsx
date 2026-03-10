
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Aboutus = () => {
    return (
        <>
            <div className="about-main">
                <div className="container">
                    <div className="about-inner">
                        <div className="about-title">
                            <span className="title-line"></span>
                            <h4>About us</h4>
                            <h1>Serving Since 1950</h1>
                        </div>


                        <div className="about-contain">

                            {/* Left Section */}
                            <div className="about-left">
                                <h2>Our Story</h2>
                                <h5>
                                    Eos kasd eos dolor vero vero, lorem stet diam rebum.
                                    Ipsum amet sed vero dolor sea
                                </h5>
                                <p>
                                    Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                                    nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
                                    Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
                                    Labor diam sed ipsum et eirmod
                                </p>
                                <a href="">Learn More</a>
                            </div>

                            {/* Center Image */}
                            <div className="about-center">
                               <img src={process.env.PUBLIC_URL + "/assets/image/about.png"} alt="Coffee" />
                            </div>

                            {/* Right Section */}
                            <div className="about-right">
                                <h2>Our Vision</h2>
                                <p>
                                    Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                                    lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed
                                    sed diam. Ea et erat ut sed diam sea ipsum est dolor
                                </p>

                                <div className="icon-row">
                                    <FaCheck className="icon" />
                                    <h5>Lorem ipsum dolor sit amet</h5>
                                </div>

                                <div className="icon-row">
                                    <FaCheck className="icon" />
                                    <h5>Lorem ipsum dolor sit amet</h5>
                                </div>

                                <div className="icon-row">
                                    <FaCheck className="icon" />
                                    <h5>Lorem ipsum dolor sit amet</h5>
                                </div>

                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
