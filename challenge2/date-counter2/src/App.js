import { useState } from "react";
import "./styles.css";

function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState("0");
    let date = new Date();
    date.setDate(date.getDate() + Number(count));

    const handleMinusCountClick = () => {
        setCount((prevCount) => Number(prevCount) - step);
    };

    const handlePlusCountClick = () => {
        setCount((prevCount) => Number(prevCount) + step);
    };

    const handleReset = () => {
        setStep(1);
        setCount("0");
        date = new Date();
    };

    return (
        <div>
            <div>
                <input
                    type="range"
                    min={1}
                    max={10}
                    onChange={(e) => setStep(Number(e.target.value))}
                    value={step}
                />
                <span>{step}</span>
            </div>
            <div>
                <button onClick={handleMinusCountClick}>-</button>
                <input
                    type="text"
                    onChange={(e) => setCount(Number(e.target.value))}
                    value={count}
                />
                <button onClick={handlePlusCountClick}>+</button>
            </div>
            <p>
                <span>
                    {count === "0"
                        ? "Today is" + date.toLocaleDateString()
                        : count > 0
                        ? count +
                          " days from todays is " +
                          date.toLocaleDateString()
                        : Math.abs(count) +
                          " days ago is " +
                          date.toLocaleDateString()}
                </span>
            </p>
            <div>
				{count !== "0" || step !== 1 ? <button onClick={handleReset}>Reset</button> : ""}
            </div>
        </div>
    );
}

export default App;
