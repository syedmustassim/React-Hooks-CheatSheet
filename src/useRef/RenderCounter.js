// I have an input element, and I want to check how many times my component
// renders evverytime a value is changed. How? 
// (Note: DO NOT USE USESTATE, WILL END UP CAUSING INIFINTE RENDERS LOL)

import {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom"

const RenderCount = () => {

    const [game, setGame] = useState("");
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current +1;
    }, [game])
    return(
        <div>
        <Link to="/useref">Back to useRef hook</Link>
         <h1> Render Count </h1>
         <p> This component displays the render count, every time we enter any details in the input field.</p>
         <p>To keep track of the render count, useRef is used. </p>
         <p> The main reason for this being, that a change in the useRef current value does NOT re-render the entire component.</p>
         <p> Had we used the useState hook here to count the renders, for every change in the input field which creates a re-render, 
            and then the state changes, that will again cause a re-render. This will actually lead to infinite renders. </p>
         <input type="text" onChange={e => setGame(e.target.value)}/>
         <h1>Selected game is - {game}</h1>
        <h2> The component has rendered {renderCount.current} number of times </h2>
        </div>
    )
}

export default RenderCount;