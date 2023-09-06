import {useState} from "react"

const WithoutMemo = () => {
    const [count, setCount] = useState(0);
    //Without useMemo
    //Will lead to the input operation being slow.
    const result = factorial(count)

    const [name, setName] = useState("")
    return(
        <div>
            <h2> Without useMemo </h2>
            <p> Even as you start typing in the input box, you will note there is a lag. </p>
            <p> This is not the case when you have useMemo to memoize the result. </p>
            <h3> Factorial of {count}: {result}</h3>
            <button onClick={() => setCount(prev => prev + 1)}> Increment </button>
            <button onClick={() => setCount(prev => prev - 1)}> Decrement </button>
            <h3> Input box - </h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h3> My name is {name} </h3>
        </div>
    )
}

function factorial(n){
    let i = 0;
    while(i < 140000000) i++ 
    // above steps taken to increase load
    if(n < 0) {
        return -1
    }
    if( n === 0){
        return 1
    }
    return n * factorial(n-1)
}

export default WithoutMemo;