import React, { Component } from "react";

class NewMemeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc: "",
            topText: "", 
            botText: ""
        }
        this.handleChange = this.onChange.bind(this);
        this.handleSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            imgSrc: "",
            topText: "",
            botText: ""
        });
    }

    render(){
        return (
            <div className="NewMemeForm">
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="imgSrc">Url for image:</label>
                    <input name="imgSrc" value={this.state.imgSrc} onChange={this.handleChange} />
                    <label htmlFor="topText">Top Text:</label>
                    <input name="topText" value={this.state.topText} onChange={this.handleChange} />
                    <label htmlFor="botText">Bottom Text:</label>
                    <input name="botText" value={this.state.botText} onChange={this.handleChange} />
                    <button>Make dis meme</button>
                </form>
            </div>
        );
    }
}
export default NewMemeForm;