import { INCREMENT , DECREMENT } from "./counterTypes";

export const  incrementCount = (number)=> {
    return {
        type: INCREMENT,
        payload:number
    }

}
export const decrementCount = ()=> {
    return {
        type: DECREMENT
    }

}