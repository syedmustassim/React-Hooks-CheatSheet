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
      <p> Here, we use the useRef hook along with the focus() property, to select a JSX element.</p>
      <p>Once you input your name in the input field and click on reset, it resets the input and then focuses on the input field again.</p>
      <p>Go ahead, try it out yourself!</p>
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
