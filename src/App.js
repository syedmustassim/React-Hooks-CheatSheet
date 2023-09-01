import "./styles.css";
import RandomNumberGenerator from "./useRef/RandomNumberCounter";
import UseRefHook from "./useRef/UseRefHook";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks CheatSheet</h1>
      <UseRefHook />
      <RandomNumberGenerator />
    </div>
  );
}
