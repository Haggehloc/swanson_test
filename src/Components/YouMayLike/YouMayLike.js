import React from "react";
import LineBreakWithText from "./SubComponents/LineBreakWithText";
import Item from "./SubComponents/Item"


import vitamin_d3 from "../../resources/SW1371.webp";
import zinc_picolinate from "../../resources/SW1113.webp";
import sixteen_strain_probiotic from "../../resources/SWA051.webp"
import delivery_insurance from "../../resources/DELIVERYINS01.webp"
import turmeric_and_black_pepper from "../../resources/SW1613.webp"

class YouMayLike extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const itemContainerStyle = {
            position:"absolute",
            margin:"auto",
            transform: "translate(5%)",
            whiteSpace: "nowrap"
        }
        return (
            <div>
                <div>
                    <LineBreakWithText />
                </div>
                <div style={itemContainerStyle}>
                    <Item
                        src={vitamin_d3}
                        rating={5}
                        reviews={440}
                        details="Vitamin D3 - Highest Potency"
                        content="5,000 IU 250 Sgels"
                        price="$10.99"
                        accountType="Swanson Premium"
                        link="https://bit.ly/2ZCOcZK"
                    />
                    <Item
                        src={zinc_picolinate}
                        rating={5}
                        reviews={95}
                        details="Zinc Picolinate - Body Preferred Form"
                        content="22 mg 60 caps"
                        price="$2.59"
                        accountType="Swanson Premium"
                        link="https://bit.ly/2ZCOcZK"
                    />
                    <Item
                        src={sixteen_strain_probiotic}
                        rating={5}
                        reviews={823}
                        details="Dr. Stephen Langer's Ultimate 16 Strain Probiotic with FOS"
                        content="3.2 Billion CFU 60 Veg Drcaps"
                        price="2 for $14.79"
                        isSale={true}
                        accountType="Swanson Probiotics"
                        link="https://bit.ly/2ZCOcZK"
                    />
                    <Item
                        src={delivery_insurance}
                        rating={5}
                        reviews={78}
                        details="DELIVERY INSURANCE"
                        content=""
                        price="$1.00"
                        accountType="Swanson Health Products Inc."
                        link="https://bit.ly/2ZCOcZK"
                    />
                    <Item
                        src={turmeric_and_black_pepper}
                        rating={5}
                        reviews={238}
                        details="Turmeric & Black Pepper"
                        content="60 Veg Caps"
                        price="2 for $13.99"
                        isSale={true}
                        accountType="Swanson Premium"
                        link="https://bit.ly/2ZCOcZK"
                    />
                </div>
            </div>
            );
    }


}

export default YouMayLike;