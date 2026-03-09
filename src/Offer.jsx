import React from "react"

const Offer = () => {
    return (
        <>
            <div className="offer-main">
                <img src="assets/image/coffee.jpg" alt="" />
                <div className="container">
                    <div className="offer-inner">
                        <div className="offer-text">
                            <h1>50% OFF</h1>
                            <h2>Sunday Special Offer</h2>
                            <p>Only for Sunday from 1st Jan to 30th Jan 2045</p>
                        </div>
                        <div className="offer-form">
                            <input type="email" name="email" placeholder="Youe Email" />
                            <button type="submit" name="submit">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer