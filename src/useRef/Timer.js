import {useRef, useState} from "react"

const Timer = () => {

    const timerId = useRef(0);
    const [seconds, setSeconds] = useState(0)
    const startTimer = () => {
        timerId.current = setInterval(() => {
            timerId.current++
            setSeconds(prev => prev + 1)
        },1000)
    }
    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = seconds;
    }
    
    const resetTimer = () => {
        stopTimer();
        if(seconds){
            setSeconds(0)
        }
    }
    return (
        <div>
            <br/>
            <h1> Timer </h1>
            <h2> Seconds: {timerId.current} </h2>
            <section> 
                <button onClick={startTimer}> Start </button>
                <button onClick={stopTimer}> Pause </button>
                <button onClick={resetTimer}> Reset </button>
            </section>
        </div>
    )
}

export default Timer;