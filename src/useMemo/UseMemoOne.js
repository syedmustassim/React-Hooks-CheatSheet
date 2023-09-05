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
    const factorialString = factorial.toString();
    return(
        <div>
        <h1> Heavy function memoization </h1>
        <p> Memoization: Memoization is an optimization technique used in programming to improve the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can help reduce redundant computations and speed up the execution of code, especially in scenarios where a function is called with the same arguments multiple times.</p>
   

        <h3> Brief Explanation </h3>
        <p> We take two functionalities here. </p>
        <p>  A counter and an input box that sets a name. </p>
        <p> The aim here is to memoize one functionality. </p>
        <p> We make the factorial function heavy, which leads to longer load times / heavy computation </p>
        <pre> {factorialString}</pre>
        <p> By adding the while loop above, we make the function slow. </p>
        <p> We maintain a state variable that will be updated everytime it's factorial is to be calculated. </p>
        <p> This leads to the entire component being re-rendered and it will be slow. </p>
        <p> The catch with memoization and all of this, is that eventhough it is only the factorial function that is heavy, the entire component will become slow because of this. </p>
        <p> When we try to enter anything it in the input box, even that will take time. Hence, to avoid this, we memoize the heavy function. </p>
        <p> useMemo will be used with the result where we call the factorial function </p>
        <img src="https://i.postimg.cc/T2Vmz1xn/Screenshot-188.png" alt="memo-result" />
        <p> This is what helps us. </p>
        <p> Demo below. </p>
        <h3> Factorial of {count} = {result}</h3>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        <hr/>
        <h3> Input operation: </h3>
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