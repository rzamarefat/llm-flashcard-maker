import {ADD_WORDS, SET_ALL_WORDS} from './actionTypes'

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