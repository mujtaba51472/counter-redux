import { INCREMENT , DECREMENT } from "./counterTypes";

export const  incrementCount = ()=> {
    return {
        type: INCREMENT
    }

}
export const decrementCount = ()=> {
    return {
        type: DECREMENT
    }

}