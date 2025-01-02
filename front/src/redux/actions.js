import {ADD_WORDS, SET_ALL_WORDS, SET_NEW_WORDS, SET_FOCUSED_REVIEW_WORD} from './actionTypes'

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

export const setNewWords = (words) => {
    return {
        type: SET_NEW_WORDS,
        payload: words

    }
}

export const setFocusedReviewWord = (word) => {
    return {
        type: SET_FOCUSED_REVIEW_WORD,
        payload: word
    }
}
