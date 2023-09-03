import "./styles.css";
import UseMemoOne from "./useMemo/UseMemoOne";
import RandomNumberGenerator from "./useRef/RandomNumberCounter";
import RenderCount from "./useRef/RenderCounter";
import Timer from "./useRef/Timer";
import UseRefHook from "./useRef/UseRefHook";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks CheatSheet</h1>
      {/* <UseRefHook />
      <RandomNumberGenerator />
      <RenderCount/> */}
      {/* <Timer/> */}
      <UseMemoOne/>
    </div>
  );
}
