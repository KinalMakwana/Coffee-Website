import React from "react";
import { FaCheck } from "react-icons/fa6";

const Book = () => {
    return (
        <>
            <div className="book-main">
                <div className="container">
                    <div className="book-inner">
                        <div className="book-image">
                            <img src="assets/image/coffee.jpg" />
                        </div>

                        <div className="book-text">
                            <h1>30% OFF</h1>
                            <h2>For Online Reservation</h2>
                            <p>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>
                            <ul>
                                <li><FaCheck className="icon" />Lorem ipsum dolor sit amet</li>
                                <li><FaCheck className="icon" />Lorem ipsum dolor sit amet</li>
                                <li><FaCheck className="icon" />Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>

                        <div className="book-form">
                            <div className="book-title">
                                <h2>Book Your Table</h2>
                            </div>
                            <div className="book-subform">
                                <form action="">
                                    <input type="text" name="text" placeholder="Name" />
                                    <input type="email" name="email" placeholder="Email" />
                                    <input type="date" name="date" />
                                    <input type="time" name="time" />
                                    <input type="person" name="person" placeholder="Person" />
                                    <button type="submit" name="submit">Book Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book