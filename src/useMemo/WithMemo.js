import {useState, useMemo} from "react"
const WithMemo = () => {

    const [count, setCount] = useState(0);
    // With useMemo
    // Input operation speed remains unchanged. 

    const result = useMemo(() => {
        return factorial(count)
    }, [count])

    const [name, setName] = useState("")
    return(
        <div>
            <h2> With Memo </h2>
            <p> When you use the input box here, you will note there is no lag. </p>
            <p> This is because, when the state is changed, the value of the count state is memoized. That is, it is cached and maintained as there has been no change in it's value. So, it does not run the factorial function and we get no lag when the component is re-rendered on changing the 'name' state. </p>
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
    if(n < 0){
        return -1 
    }
    if(n === 0){
        return 1
    }
    return n * factorial(n-1)
}

export default WithMemo;