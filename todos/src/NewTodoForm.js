import React, { Component } from "react";

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            task: ""
        });
    }

    render(){
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="task">Todo:</label>
                    <input name="task" value={this.state.task} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default NewTodoForm;