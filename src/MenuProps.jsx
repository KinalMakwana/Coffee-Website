import React from "react";

const MenuProps = (b) => {
    return (
        <>

            <div className="menu-item">
                <div className="menu-iteminner">
                    <div className="menu-image">
                        <img src={b.img} />
                        <div className="menu-text">
                            <p>{b.text}</p>
                        </div>
                    </div>
                    <div className="menu-contain">
                        <div className="menu-subtitle"><span>{b.title}</span></div>
                        <div className="menu-subtext"><p>{b.subtext}</p></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuProps