import React from "react";
import Styles from "../../../styles/itemSelectStyles"
const {youMayLikeContainerStyle, lineStyle, hrLineStyle, textStyle} = Styles;


class LineBreakWithText extends React.Component {
    render() {

        return (
            <div style={youMayLikeContainerStyle}>
                <div style={lineStyle}>
                    <hr style={hrLineStyle}/>
                </div>
                <span style={textStyle}>You May Like</span>
            </div>
        );
    }

}

export default LineBreakWithText;