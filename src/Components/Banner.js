import React from "react";
import banner from "../resources/Hero.webp";

class Banner extends React.Component {
    render(){
        return(
            <a href={this.props.link}>
                <input type="image" className="banner" src={banner}/>
            </a>)
    }
}

export default Banner;