import "./styles.css";
import { useState } from "react";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    function handleAddCount() {
        setCount((c) => c + step);
        setDate((d) => {
            const newDate = new Date(d);
            newDate.setDate(newDate.getDate() + step);
            return newDate;
        });
    }

    function handleMinusCount() {
        setCount((c) => c - step);
        setDate((d) => {
            const newDate = new Date(d);
            newDate.setDate(newDate.getDate() - step);
            return newDate;
        });
    }

    function handleReset() {
        setStep(1);
        setCount(0);
        setDate(new Date());
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>{step}</span>
            </div>
            <div>
                <button onClick={handleMinusCount}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={handleAddCount}>+</button>
            </div>
            <div style={{ marginTop: "10px" }}>
                {count === 0 && "Today is "}
                {count > 0 && count + " days from today is "}
                {count < 0 && count * -1 + " days ago was "}
                {date.toLocaleDateString()}
            </div>
            {(step !== 1 || count !== 0) && (
                <button onClick={handleReset}>Reset</button>
            )}
        </div>
    );
}
