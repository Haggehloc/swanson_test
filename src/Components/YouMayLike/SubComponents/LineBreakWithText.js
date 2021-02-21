import React from "react";

class LineBreakWithText extends React.Component {
    render() {
        const styles = {
            border: "0",
            borderTop: "1px solid green",
            width: "100%",
            height: "1px",
            display: "inline-block",
            position: "absolute",
            padding: 0,
            zIndex: 5
        };

        const lineStyles = {
            position: "relative",
            width: "100%"
        }

        const textStyles = {
            backgroundColor: "#fff",
            position: "absolute",
            zIndex: "10",
            top:"0",
            left:"50%",
            color: "green",
            fontWeight: "bold",
            display: "inline-block",
            fontSize: "200%",
            justifyContent:"center"
    };

        const containerStyles = {
            display: "block",
            width: "1400px",
            height: "25px",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            overflowX: "hidden",
            overflowY: "hidden",
            paddingTop: "20px",
            position: "relative"
        }

        return (
            <div style={containerStyles}>
                <div style={lineStyles}>
                    <hr style={styles}/>
                </div>
                <span style={textStyles}>You May Like</span>
            </div>

        );
    }

}

export default LineBreakWithText;