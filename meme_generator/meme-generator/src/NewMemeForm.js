import React, { Component } from "react";

class NewMemeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc: "",
            topText: "", 
            botText: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            imgSrc: "",
            topText: "",
            botText: ""
        })
    }

    render(){
        return (
            <div className="NewMemeForm">
                <form onSubmit={this.onSubmit} >
                    <label htmlFor="imgSrc">Url for image:</label>
                    <input name="imgSrc" value={this.state.imgSrc} onChange={this.onChange} />
                    <label htmlFor="topText">Top Text:</label>
                    <input name="topText" value={this.state.topText} onChange={this.onChange} />
                    <label htmlFor="botText">Bottom Text:</label>
                    <input name="botText" value={this.state.botText} onChange={this.onChange} />
                    <button>Make dis meme</button>
                </form>
            </div>
        );
    }
}
export default NewMemeForm;