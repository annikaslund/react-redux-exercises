const INITIAL_STATE = {
    memes: []
}

function memeReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD") {
        let { imgSrc, topText, botText } = action
        return {
            ...state,
            memes: [...state.memes, { imgSrc, topText, botText }]
        }

    } else if (action.type === "REMOVE") {
        return {
            ...state,
            memes: [...state.memes.slice(0, action.idx),
            ...state.memes.slice(action.idx + 1)
            ]
        }
    }

    return { ...state }
}

export default memeReducer;