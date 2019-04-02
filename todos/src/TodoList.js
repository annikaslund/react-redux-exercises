import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(newTodo) {
        const { task } = newTodo;
        this.props.dispatch({
            type: "ADD",
            task,
            id: uuid()
        });
    }

    removeTodo(id) {
        this.props.dispatch({
            type: "REMOVE",
            id
        });
    }

    render() {
        return (
            <div className="TodoList">
                <NewTodoForm handleAdd={ this.addTodo }/>
                { this.props.todos.map( t => 
                    <Todo key= { t.id }
                          task={ t.task }
                          handleRemove={ () => this.removeTodo(t.id) }/>
                    )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos };
}

export default connect(mapStateToProps)(TodoList);