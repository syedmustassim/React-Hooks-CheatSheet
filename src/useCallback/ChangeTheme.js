import {useState} from "react"

const ChangeTheme = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }
    return(
        <div style={theme}>
            <h1> Change theme example for useCallback </h1>
            <button onClick={() => setDark(prev => !prev)}>Toggle theme</button>
        </div>
    )
}

export default ChangeTheme;