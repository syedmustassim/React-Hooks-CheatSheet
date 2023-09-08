import React, { Suspense} from "react"
import {Routes, Route} from "react-router-dom"
import Loading from "../Loader/Loading";
const Home = React.lazy(() => import("../Home"))
const UseCallbackPage = React.lazy(() => import ("../Pages/UseCallbackPage"));
const UseMemoPage = React.lazy(() => import ("../Pages/UseMemoPage"));
const UseRefPage = React.lazy(() => import("../Pages/UseRefPage"));
const ChangeTheme = React.lazy(() => import("../useCallback/ChangeTheme"));
const UseMemoOne = React.lazy(() => import("../useMemo/UseMemoOne")) ;
const RandomNumberGenerator = React.lazy(() => import("../useRef/RandomNumberCounter"));
const RenderCount = React.lazy(() => import("../useRef/RenderCounter"));
const UseRefHook = React.lazy(() => import("../useRef/UseRefHook"));

const AppRouter = () => {
    return(
        <div>
            <Suspense fallback={<Loading/>}>
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
            </Suspense>
        </div>
    )
}

export default AppRouter;