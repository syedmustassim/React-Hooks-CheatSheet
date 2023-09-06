import {useState} from "react"
import List from "./List";
const ChangeTheme = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    const getItems = () => {
        return [number, number + 1, number + 2]
    }
    return(
        <div style={theme}>
            <h1> Change theme example for useCallback </h1>
            <p> To accurately check what happens here, we will have to check our console statements </p>
            
            <input type="text" onChange={e => setNumber(parseInt(e.target.value))} placeholder="Enter number"/>
            <button onClick={() => setDark(prev => !prev)}>Toggle theme</button>
            <List getItems={getItems}/>
        </div>
    )
}

export default ChangeTheme;