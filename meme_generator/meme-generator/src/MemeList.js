import React, { Component } from "react";
import Meme from "./Meme";
import NewMemeForm from "./NewMemeForm";

class MemeList extends Component {
    render(){
        return (
            <div className="MemeList">
                <NewMemeForm />
                <Meme />
            </div>
        );
    }
}
export default MemeList;