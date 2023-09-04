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
         <input type="text" onChange={e => setGame(e.target.value)}/>
         <h1>Selected game is - {game}</h1>
        <h2> The component has rendered {renderCount.current} number of times </h2>
        </div>
    )
}

export default RenderCount;