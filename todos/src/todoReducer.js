const INITIAL_STATE = {
    todos: []
}

function todoReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD") {
        let { id, task } = action
        return {
            ...state,
            todos: [...state.todos, { id, task }]
        }

    } else if (action.type === "REMOVE") {
        return {
            ...state,
            todos: state.todos.filter( t => t.id !== action.id)
        }
    }

    return { ...state }
}

export default todoReducer;