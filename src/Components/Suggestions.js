import React from "react";
import suggestions from "../resources/Hero.webp";

const Suggestions = () => {
    return (
        <div>
            <img
                src={suggestions}
                style={{ left:0, right:0, margin: "auto", display: "block" }}
                alt="Loading..."
            />
        </div>
    );
};

export default Suggestions;