import React, { Component } from "react";

class Meme extends Component {
    render(){
        let style = { backgroundImage: `url(${this.props.imgSrc})`,
                      height: "500px",
                    width: "500px" }
        return (
            <div style={ style } className="Meme" onClick={this.props.handleRemove}>
                <p>{ this.props.topText }</p>
                <p>{ this.props.botText }</p>
            </div>
        );
    }
}
export default Meme;