import {useState, useCallback} from "react"
import List from "./List";
const ChangeTheme = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    const getItems = useCallback(() =>  {
        return [number, number + 1, number + 2]
    },[number])
    return(
        <div style={theme}>
            <h1> Change theme example for useCallback </h1>
            <p> To accurately check what happens here, we will have to check our console statements </p>
            
            <input type="text" onChange={e => setNumber(parseInt(e.target.value))} placeholder="Enter number"/>
            <button onClick={() => setDark(prev => !prev)}>Toggle theme</button>
            <List getItems={getItems}/>

            <p>Notice here that the useEffect render does not change when I try to toggle the theme.</p>
            <p>It only changes when I enter a number into the input box.</p>
            <p>This is basically how useCallback has actually helped us to memoize the functions inside our component, that generates the list.</p>
            <button>Check without useCallback</button>
        </div>
    )
}

export default ChangeTheme;