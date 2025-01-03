import {ADD_WORDS, 
        SET_ALL_WORDS, 
        SET_FOCUSED_REVIEW_WORD, 
        SET_WORDS_FOR_REVIEW,
        SET_CONTENT_FOR_REVIEW_WORDS,
        SET_WORDS_FOR_VERIFICATION
} from './actionTypes'

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

export const setContentForReviewWords = (content) => {
    return {
        type: SET_CONTENT_FOR_REVIEW_WORDS,
        payload: content
    }
}

export const setWordsForVerification = (words) => {
    return {
        type: SET_WORDS_FOR_VERIFICATION,
        payload: words
    }
}
