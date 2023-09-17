// Used for Storing previous state values and hold a mutable value to prevent re-render

import { useState, useRef, useEffect } from "react";
import {Link } from "react-router-dom"

const RandomNumberGenerator = () => {
  const [count, setCount] = useState(0);
  const previousValue = useRef("");

  useEffect(() => {
    // for every render because of change in state, the previous value will be saved in the current property
    previousValue.current = count;
  }, [count]);

  const generateNum = () => {
    setCount(Math.ceil(Math.random() * 1000)); //Math.ciel used to only get whole numbers without decimals
  };
  return (
    <div>
      <Link to="/useref">Back to useRef hook</Link>
      <h1>The Random Number generator</h1>
      <p>The component here generates a random number between 0 and 1000.</p>
      <p>useRef hook here is used to keep track of the previous state value. That is, the previous random number
        that was generated. </p>
      <h1> Random Number: {count} </h1>
      <button onClick={generateNum}> Generate Number</button>
      {typeof previousValue.current !== "undefined" && (
        <h2> Previous number: {previousValue.current}</h2>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
