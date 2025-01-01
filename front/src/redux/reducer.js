import { ADD_WORDS, SET_ALL_WORDS, SET_NEW_WORDS } from "./actionTypes";
import initialState from "./initiaState"


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORDS:
            return {
                ...state, addingWords: action.payload
            }
        case SET_ALL_WORDS:
            return {
                ...state, words: action.payload
            }
        case SET_NEW_WORDS:
            return {
                ...state, newWords: action.payload
            }

        default:
            return state;
    }

}


export default reducer