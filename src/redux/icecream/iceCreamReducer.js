import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numofIceCreams: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numofIceCreams: state.numofIceCreams - 1
        }

        default: return state
    }
}