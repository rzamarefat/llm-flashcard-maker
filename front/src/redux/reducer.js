import { ADD_WORDS, SET_ALL_WORDS, SET_FOCUSED_REVIEW_WORD, SET_WORDS_FOR_REVIEW } from "./actionTypes";
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
        case SET_WORDS_FOR_REVIEW:
            return {
                ...state, wordsForReview: action.payload
            }

        case SET_FOCUSED_REVIEW_WORD:
            return {
                ...state, focusedReviewWord: state.focusedReviewWord + 1
            }

        default:
            return state;
    }

}


export default reducer