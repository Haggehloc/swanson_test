import React from "react";

import ReactStars from "react-rating-stars-component/dist/react-stars";

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const onClickLink = () => {
            return this.props.link
        }

        const containerStyles = {
            width:"250px",
            display: "inline-block"
        }

        const srcStyles = {

        }

        const ratingsStyle = {
            display: "block",
            textAlign: "center"
        }

        const ratingsSubStyle = {
            display: "inline-block"
        }

        const premiumStyle = {
            textAlign: "center",
            fontSize: "0.7vw"
        }

        const detailStyle = {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: ".8vw"

        }

        const contentStyle = {
            textAlign: "center",
            fontSize: "0.9vw"
        }

        const priceStyle = {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: ".9vw"
        }

        const addToCartStyle = {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "7vw",
            backgroundColor: "#d44400",
            color: "white",
            fontWeight: "bold",
            fontSize:"1vw",
            borderStyle: "solid",
            borderColor: "#00AA66",
            borderWidth: "0"
        }

        const details = this.props.details;

        const reviewNumber = this.props.reviews;

        const content = this.props.content;

        const price = this.props.price;

        return (
            <div style={containerStyles}>
                <div style={srcStyles}>
                    <img src={this.props.src}/>
                </div>
                <div>
                    <div style={ratingsStyle}>
                        <div style={ratingsSubStyle}>
                            <ReactStars
                                count={5}
                                activeColor="#008000"
                                edit={false}
                                size="1vw"
                                value={this.props.rating}
                                />
                        </div>
                        <div style={ratingsSubStyle}>
                            ({reviewNumber})
                        </div>
                    </div>
                    <div style={premiumStyle}>
                        Swanson Premium
                    </div>
                    <div style={detailStyle}>
                        {details}
                    </div>
                    <br />
                    <div style={contentStyle}>
                        {content}
                    </div>
                    <br />
                    <div style={priceStyle}>
                        ${price}
                    </div>
                    <a href={onClickLink()}><input type="button" style={addToCartStyle} value="add to cart"/> </a>
                </div>
            </div>

        );
    }

}

export default Item;