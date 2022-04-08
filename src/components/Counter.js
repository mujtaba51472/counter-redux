import React from 'react'
import { connect } from 'react-redux'
import { incrementCount , decrementCount } from '../redux/counter/CounterActions'

 export const Counter = (props) => {
    console.log('props' , props)
  return (
    <div>
    <button onClick={props.incrementCount}>+</button>
     <p>count {props.count}</p>
     <button onClick={props.decrementCount}>-</button>
    </div>
  )
}
const mapStateToProps = state=> {
    return {
        count: state.count.count
    }
}
const mapDispatchToProps = dispatch=> {
    return {
        decrementCount:()=>dispatch(decrementCount()),
        incrementCount:()=>dispatch(incrementCount(5))

    }
}

export default connect(   
    mapStateToProps , mapDispatchToProps
)(Counter)