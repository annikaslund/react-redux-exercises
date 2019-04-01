const INITIAL_STATE = {
    memes: []
}

function memeReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD") {
        let { imgSrc, topText, botText, id  } = action
        return {
            ...state,
            memes: [...state.memes, { imgSrc, topText, botText, id }]
        }

    } else if (action.type === "REMOVE") {
        return {
            ...state,
            memes: state.memes.filter( m => m.id !== action.id)
        }
    }

    return { ...state }
}

export default memeReducer;