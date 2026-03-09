import React from "react";
import MenuProps from "./MenuProps";

const Menu = () => {
    return (
        <>
            <div className="menu-main">
                <div className="container">
                    <div className="menu-inner">
                        <div className="menu-title">
                            <span className="title-line"></span>
                            <h4>Menu & Pricing</h4>
                            <h1>Competitive Pricing</h1>
                        </div>
                        <div className="menu-contain">
                            <div className="menu-title">
                                <h2>Hot Coffee</h2>
                                <MenuProps img={"assets/image/menu-1.jpg"} text={"$5"} title={"Black Coffee"} subtext={"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"} />
                                <MenuProps img={"assets/image/menu-2.jpg"} text={"$7"} title={"Chocolete Coffee"} subtext={"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"} />
                                <MenuProps img={"assets/image/menu-3.jpg"} text={"$9"} title={"Coffee With Milk"} subtext={"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"} />
                            </div>
                            <div className="menu-title">
                                <h2>Cold Coffee</h2>
                                <MenuProps img={"assets/image/menu-1.jpg"} text={"$5"} title={"Black Coffee"} subtext={"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"} />
                                <MenuProps img={"assets/image/menu-2.jpg"} text={"$7"} title={"Chocolete Coffee"} subtext={"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"} />
                                <MenuProps img={"assets/image/menu-3.jpg"} text={"$9"} title={"Coffee With Milk"} subtext={"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu