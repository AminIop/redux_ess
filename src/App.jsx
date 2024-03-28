import React from 'react'
import { IncrementCounter } from './components/counter/increment'
import { DecrementCounter } from './components/counter/decrement'
import { Counter } from './components/counter'


const App = () => {

    return (
        <div>
            <Counter />
            <br />
            <IncrementCounter />
            <br />
            <DecrementCounter />
            <br />
        </div>
    )
}

export default App