import React from "react";
import Styles from "../../../styles/itemSelectStyles";
import ReactStars from "react-rating-stars-component/dist/react-stars";

const {priceStyle, containerStyles, ratingsStyle, ratingsSubStyle, accountTypeStyle, detailStyle, contentStyle, addToCartStyle} = Styles;

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const onClickLink = () => {
            return this.props.link
        }

        const finalPriceStyle = Object.create(priceStyle);

        if(this.props.isSale){
            finalPriceStyle.color = "red"
        }

        const container = {
            display: "grid"
        }

        const details = this.props.details;
        const reviewNumber = this.props.reviews;
        const content = this.props.content;
        const price = this.props.price;
        const accountType = this.props.accountType;

        return (
            <div style={containerStyles}>
                <div className="innerContainer">
                    <div>
                        <img src={this.props.src}/>
                    </div>
                    <div style={container}>
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
                        <div style={accountTypeStyle}>
                            {accountType}
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
                            {price}
                        </div>
                        <div>
                            <a href={onClickLink()}><input type="button" style={addToCartStyle} value="add to cart"/> </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Item;