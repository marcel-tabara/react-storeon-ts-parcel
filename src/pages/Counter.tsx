import * as React from 'react'
import { useStoreon } from 'storeon/react'
import { CounterEvents, CounterState } from '../store/types'

const Counter = () => {
  const { dispatch, counter } = useStoreon<CounterState, CounterEvents>('counter')

  return (
    <div className="wrapper">
      <div className="counter">{counter}</div>
      <div>
        <button onClick={() => dispatch('dec')}>Decrement</button>
        <button onClick={() => dispatch('inc')}>Increment</button>
      </div>
    </div>
  )
}
export default Counter
