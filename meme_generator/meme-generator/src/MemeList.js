import React, { Component } from "react";
import { connect } from "react-redux";
import Meme from "./Meme";
import NewMemeForm from "./NewMemeForm";
import uuid from "uuid/v4"

class MemeList extends Component {
    constructor(props) {
        super(props);
        this.addMeme = this.addMeme.bind(this);
        this.removeMeme = this.removeMeme.bind(this);
    }

    addMeme(newMeme) {
        const { imgSrc, topText, botText } = newMeme;
        this.props.dispatch({
            type: "ADD",
            imgSrc,
            topText,
            botText,
            id: uuid()
        });
    }

    removeMeme(idx) {
        this.props.dispatch({
            type: "REMOVE",
            idx
        });
    }

    render() {
        return (
            <div className="MemeList">
                <NewMemeForm handleAdd={ this.addMeme }/>
                { this.props.memes.map( m => 
                    <Meme topText={ m.topText }
                          botText={ m.botText }
                          imgSrc={ m.imgSrc }
                          key= { m.id }
                          handleRemove={ () => this.removeMeme(m.id) }/>
                    )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { memes: state.memes };
}

export default connect(mapStateToProps)(MemeList);