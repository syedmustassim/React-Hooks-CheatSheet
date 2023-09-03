// We take two functionalities here. 
// A counter and an input box that sets a name

// The aim here is to memoize one functionality.
// If I make the factorial function heavy, which lead to longer load
// every time we change the count, it will take some time to render
// and this will also actually effect the input operation too.
// For the input operation to not get slowed down by this, we will have 
// to apply useMemo in the result. 

import {useState, useMemo} from "react"

const UseMemoOne = () => {
    const [count, setCount] = useState(0)
    // With useMemo
    // Input operation speed remains unchanged. 

    const result = useMemo(() => {
        return factorial(count)
    }, [count])

    //Without useMemo
    //Will lead to the input operation being slow.
    // const result = factorial(count)

    const [name, setName] = useState("")
    return(
        <div>
        <h1> Factorial of {count} = {result}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        <hr/>
        <h2> Input operation: </h2>
        <input type="text" placeholder="enter name" value={name} onChange={e => setName(e.target.value)} />
        <h3> My name is {name} </h3>

        </div>
    )
}

function factorial(n){
    let i = 0;
    while(i < 140000000) i++ 
    // above steps taken to increase load 
    if(n < 0){
        return -1 
    }
    if(n === 0){
        return 1
    }
    return n * factorial(n-1)
}

export default UseMemoOne;