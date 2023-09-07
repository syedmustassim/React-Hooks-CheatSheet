import {useState, useEffect} from "react"

const List = ({getItems}) => {
    const [items, setItems] = useState([])
    const [render, setRender] = useState(0)

    useEffect(() => {
        setItems(getItems())
        console.log('Updating items')
        setRender(prev => prev + 1)
    },[getItems])
    return(
        <div>
            {items?.map((item) => <div key={item}> <h2> {item} </h2></div>)}
            <h2> The useEffect that updates the number list has rendered {render} times </h2>
        </div>
    )
}

export default List;