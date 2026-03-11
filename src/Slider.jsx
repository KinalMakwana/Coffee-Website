import React, { useState, useEffect, useRef } from "react";

const images = [
    process.env.PUBLIC_URL + "/assets/image/coffee1.jpg",
    process.env.PUBLIC_URL + "/assets/image/coffee2.jpg",
    process.env.PUBLIC_URL + "/assets/image/coffee10.jpg",
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    return (
        <>
            <div className="main">

                <div className="inner-main">
                    <div
                        className="slider"
                        onMouseEnter={stopAutoSlide}
                        onMouseLeave={startAutoSlide}
                    >
                        <div className="text-overlay">
                            <h3>We Have Been Serving</h3>
                            <h1>COFFEE</h1>
                            <p>* SINCE 1950 *</p>
                        </div>
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <img key={index} src={img} alt="slider" />
                            ))}
                        </div>

                        {/* Dots */}
                        <div className="dots">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={current === index ? "dot active" : "dot"}
                                    onClick={() => setCurrent(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Slider;