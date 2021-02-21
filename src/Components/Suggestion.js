import React from "react";

const styles = (paddingRight) => {
    return {width: "33.33333%",
        "padding-right": paddingRight
    }
}

class Suggestion extends React.Component{
    render() {
        return (
            <a href={this.props.link}>
                <input type="image" style={styles(this.props.paddingRight)} className="suggestion" src={this.props.src}/>
            </a>
        )
    }

}

export default Suggestion;