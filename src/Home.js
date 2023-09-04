import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div>
            <h1> Mustassim's React Hooks CheatSheet! </h1>
            <div>
                <Link to="/useref"> useRef Hook </Link>
            </div>
            <div>
                <Link to="/usememo"> useMemo Hook </Link>
            </div>
        </div>
    )
}

export default Home;