import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numofCakes: 10
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numofCakes: state.numofCakes - 1
        }

        default: return state
    }
}