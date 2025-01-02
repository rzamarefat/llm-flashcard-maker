import {ADD_WORDS, SET_ALL_WORDS, SET_FOCUSED_REVIEW_WORD, SET_WORDS_FOR_REVIEW} from './actionTypes'

export const addWords = (words) => {
    return {
        type: ADD_WORDS,
        payload: words
    }
}

export const setAllWords = (words) => {
    return {
        type: SET_ALL_WORDS,
        payload: words

    }
}

export const setReviewWords = (words) => {
    return {
        type: SET_WORDS_FOR_REVIEW,
        payload: words

    }
}

export const setFocusedReviewWord = () => {
    return {
        type: SET_FOCUSED_REVIEW_WORD,
    }
}
