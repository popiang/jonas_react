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

    function handleAddStep() {
        setStep((s) => s + 1);
    }

    function handleMinusStep() {
        setStep((s) => s - 1);
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <div>
                <button onClick={handleMinusStep}>-</button>
                <span>Step: {step}</span>
                <button onClick={handleAddStep}>+</button>
            </div>
            <div>
                <button onClick={handleMinusCount}>-</button>
                <span>Count: {count}</span>
                <button onClick={handleAddCount}>+</button>
            </div>
            <div style={{ marginTop: "10px" }}>
                {count === 0 && "Today is "}
                {count > 0 && count + " days from today is "}
                {count < 0 && count * -1 + " days ago was "}
                {date.toLocaleDateString()}
            </div>
        </div>
    );
}
