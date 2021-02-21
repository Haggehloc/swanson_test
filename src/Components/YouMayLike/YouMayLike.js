import React from "react";
import LineBreakWithText from "./SubComponents/LineBreakWithText";
import Item from "./SubComponents/Item"


import vitamin_d3 from "../../resources/SW1371.webp";

class YouMayLike extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <div>
                    <LineBreakWithText />
                </div>
                <Item
                    src={vitamin_d3}
                    rating={5}
                    reviews={440}
                    details="Vitamin D3 - Highest Potency"
                    content="5,000 IU 250 Sgels"
                    price="10.99"
                    link="https://bit.ly/2ZCOcZK"
                />
            </div>
            );
    }


}

export default YouMayLike;