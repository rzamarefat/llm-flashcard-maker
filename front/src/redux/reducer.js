import { ADD_WORDS } from "./actionTypes";
import initialState from "./initiaState"


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORDS:
            return {
                ...state, addingWords: action.payload
            }

        default:
            return state;
    }

}


export default reducer