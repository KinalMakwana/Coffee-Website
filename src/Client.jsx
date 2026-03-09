
import React, { useEffect, useRef, useState } from "react";

const Client = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = 4; // Number of slides

  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const slideInterval = setInterval(() => {
      index = (index + 1) % totalSlides;
      slider.style.transform = `translateX(-${index * 100}%)`;
      setActiveIndex(index);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="client-main">
      <div className="container">
        <div className="client-inner">
          <div className="client-title">
            <span className="title-line"></span>
            <h4>Testimonial</h4>
            <h1>Our Clients Say</h1>
          </div>

          <div className="client-contain">
            <div className="client-slider" ref={sliderRef}>
              <div className="client-item">
                <div className="client-profile">
                  <img src="assets/image/testimonial-1.jpg" alt="client" />
                  <div className="client-info">
                    <h3>Client Name</h3>
                    <span>Profession</span>
                  </div>
                </div>
                <p>
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo
                  elitr eirmod clita lorem. Doloe tempor ipsum sanct clita
                </p>
              </div>

              <div className="client-item">
                <div className="client-profile">
                  <img src="assets/image/testimonial-2.jpg" alt="client" />
                  <div className="client-info">
                    <h3>Client Name</h3>
                    <span>Profession</span>
                  </div>
                </div>
                <p>
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo
                  elitr eirmod clita lorem. Doloe tempor ipsum sanct clita
                </p>
              </div>

              <div className="client-item">
                <div className="client-profile">
                  <img src="assets/image/testimonial-3.jpg" alt="client" />
                  <div className="client-info">
                    <h3>Client Name</h3>
                    <span>Profession</span>
                  </div>
                </div>
                <p>
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo
                  elitr eirmod clita lorem. Doloe tempor ipsum sanct clita
                </p>
              </div>

              <div className="client-item">
                <div className="client-profile">
                  <img src="assets/image/testimonial-4.jpg" alt="client" />
                  <div className="client-info">
                    <h3>Client Name</h3>
                    <span>Profession</span>
                  </div>
                </div>
                <p>
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo
                  elitr eirmod clita lorem. Doloe tempor ipsum sanct clita
                </p>
              </div>
            </div>

            <div className="client-dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <span key={i} className={activeIndex === i ? "active" : ""}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;

