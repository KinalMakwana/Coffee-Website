import React from "react";

const ServiceProps = (a) => {
    return (
        <>
            <div className="service-item">
                <div className="service-iteminner">
                    <div className="service-image">
                        <img src={a.img} />
                    </div>
                    <div className="service-contain">
                        <div className="service-icon"><p>{a.icon}</p></div>
                        <div className="service-title"><span>{a.title}</span></div>
                        <div className="service-text"><p>{a.text}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceProps