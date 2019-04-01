import React, { Component } from "react";

class NewMemeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc: "",
            topText: "", 
            botText: ""
        }
    }

    // onChange(e){

    // }

    // onSubmit(e){

    // }

    render(){
        return (
            <div className="NewMemeForm">
                <p>new meme form</p>
            </div>
        );
    }
}
export default NewMemeForm;