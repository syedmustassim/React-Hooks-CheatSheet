import {useState} from "react";
import {Link} from "react-router-dom";
import WithMemo from "./WithMemo";
import WithoutMemo from "./WithoutMemo";

const UseMemoOne = () => {
    const [toggle, setToggle] = useState(true)
    const factorialString = factorial.toString();
    return(
        <div>
        <Link to="/usememo"> Back to useMemo </Link>
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
        <button onClick={() => setToggle(!toggle)}> {toggle ? "Without useMemo" : "With useMemo"} </button>
        {toggle? <WithMemo/> : <WithoutMemo/>}

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