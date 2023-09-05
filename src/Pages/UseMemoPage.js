const UseMemoPage = () => {
    return(
        <div>
            <h1> UseMemo Hook </h1>
            <p> useMemo is a React hook that is used to memoize a heavy function. </p>
            <p> Any function that demands heavy performance and leads to slower rendering times, is a heavy function. </p>
            <p> As per the docs however, 'useMemo is a React Hook that lets you cache the result of a calculation between re-renders.'</p>
            <p> This is a complex definition. </p>
            <a href="https://react.dev/reference/react/useMemo">Link to useMemo docs</a>
            <h2> Common use cases: </h2>
            <ul>
                <li>Optimize expensive operations</li>
                <li>Referential Equality </li>
            </ul>
        </div>
    )
}

export default UseMemoPage;