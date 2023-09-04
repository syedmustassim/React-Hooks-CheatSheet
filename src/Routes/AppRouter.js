import {Routes, Route} from "react-router-dom"
import Home from "../Home"
import UseRefPage from "../Pages/UseRefPage";

const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/useref" element={<UseRefPage/>} />

            </Routes>

        </div>
    )
}

export default AppRouter;