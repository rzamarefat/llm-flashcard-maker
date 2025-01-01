import {ADD_WORDS} from './actionTypes'

export const addWords = (words) => {
    return {
        type: ADD_WORDS,
        payload: words
    }
}

