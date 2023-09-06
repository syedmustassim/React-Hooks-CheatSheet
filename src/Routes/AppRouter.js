import {Routes, Route} from "react-router-dom"
import Home from "../Home"
import UseCallbackPage from "../Pages/UseCallbackPage";
import UseMemoPage from "../Pages/UseMemoPage";
import UseRefPage from "../Pages/UseRefPage";
import ChangeTheme from "../useCallback/ChangeTheme";
import UseMemoOne from "../useMemo/UseMemoOne";
import RandomNumberGenerator from "../useRef/RandomNumberCounter";
import RenderCount from "../useRef/RenderCounter";
import UseRefHook from "../useRef/UseRefHook";

const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/useref" element={<UseRefPage/>} />
                <Route path="/useref/randomcounter" element={<RandomNumberGenerator/>} />
                <Route path="/useref/rendercounter" element={<RenderCount/>} />
                <Route path="/useref/refjsxelement" element={<UseRefHook/>} />
                <Route path="/usememo" element={<UseMemoPage/>} />
                <Route path="/usememo/example1" element={<UseMemoOne/>} />
                <Route path="/usecallback" element={<UseCallbackPage/>} />
                <Route path="/usecallback/changetheme" element={<ChangeTheme/>} />
            </Routes>

        </div>
    )
}

export default AppRouter;