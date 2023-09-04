// Referencing a DOM element

import { useState, useRef } from "react";
import {Link} from "react-router-dom"

const UseRefHook = () => {
  const [name, setName] = useState("");
  const inputEl = useRef(); //use this to reference the input element
  const resetInput = () => {
    setName("");
    inputEl.current.focus(); //focuses the input element after clicking reset
    console.log("Name entered before reset:", inputEl.current.value);
  };
  return (
    <div>
      <Link to="/useref">Back to useRef hook</Link>
      <h3> Input element focus using useRef </h3>
      <div>
      <input
        ref={inputEl}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetInput}>Reset</button>
      <p>My name is {name}</p>
      </div>
    </div>
  );
};

export default UseRefHook;
// Never update any values using useRef, especially input values
// useRef is used for referencing only mostly.
