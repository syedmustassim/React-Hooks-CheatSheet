import { Link } from "react-router-dom";

const UseCallbackPage = () => {
    return(
        <div>
            <h1> useCallback Hook </h1>
            <p> useCallback is a hook very similar in it's functionality to the useMemo hook. </p>
            <p> Whereas, the useMemo hook is used to memoize the returned value of the function. The useCallback hook is used to memoize the entire function definition itself. </p>
            <p> As per the docs, the definition is, 'useCallback is a React Hook that lets you cache a function definition between re-renders.' </p>
            <p> The use cases are similar to the useMemo hook. The only difference being, that it is used for referential equality for functions rather than values as in the case of the useMemo hook. </p>
            <h3> Example: </h3>
            <Link to="/usecallback/changetheme"> Theme Changer </Link>
        </div>
    )
}

export default UseCallbackPage;