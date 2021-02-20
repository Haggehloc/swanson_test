import React from "react";
import joint from "../resources/joints_suggestion.webp";

const styles = (paddingRight) => {
    return {width: "33.33333%",
        "padding-right": paddingRight
    }
}

const Suggestion = props => <input type="image" style = {styles(props.paddingRight)} className="suggestion" src={props.src}/>

export default Suggestion;