import React from "react";
import banner from "../resources/Hero.webp";

const Banner = () => {
    return (
        <div>
            <img
                src={banner}
                style={{ left:0, right:0, margin: "auto", display: "block" }}
                alt="Loading..."
            />
        </div>
    );
};

export default Banner;