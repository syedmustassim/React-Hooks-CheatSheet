const UseRefPage = () => {
    return(
        <div>
            <h1> UseRef Hook </h1>
            <p> useRef is a React hook used to reference a value that is not needed for rendering.</p>
            <p> It is not the same as useState. </p>
            <p> useRef returns an object, which is a singular object, with a single property called 'current'. The value of current is set to the initialValue passed. The user can later set it to something else.</p>
            <h2> Common use case: </h2>
            <ul>
                <li>Used to give reference to a JSX element. So, the user can select such specified element. Example of this is below.</li>
                <li>Is used for storing previous state values occassionally. </li>
            </ul>
            <a href="https://react.dev/reference/react/useRef" target="_blank"> Link to useRef React docs</a>
        </div>
    )
}

export default UseRefPage;