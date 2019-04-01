import React, { Component } from "react";

class Meme extends Component {
    render(){
        let style = { backgroundImage: `url(${this.props.imgSrc})` }
        return (
            <div style={ style } className="Meme">
                <p>{ this.props.topText }</p>
                <p>{ this.props.botText }</p>
            </div>
        );
    }
}
export default Meme;