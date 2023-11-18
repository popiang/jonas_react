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
    const [count, setCount] = useState(0);
    const date = new Date();
    date.setDate(date.getDate() + count);

    const handleMinusStepClick = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1);
        }
    };

    const handlePlusStepClick = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleMinusCountClick = () => {
        setCount((prevCount) => prevCount - step);
    };

    const handlePlusCountClick = () => {
        setCount((prevCount) => prevCount + step);
    };

    return (
        <div>
            <div>
                <button onClick={handleMinusStepClick}>-</button>
                <span>Step: {step}</span>
                <button onClick={handlePlusStepClick}>+</button>
            </div>
            <div>
                <button onClick={handleMinusCountClick}>-</button>
                <span>Count: {count}</span>
                <button onClick={handlePlusCountClick}>+</button>
            </div>
            <div>
                <span>
                    {count === 0
                        ? "Today is" + date.toLocaleDateString()
                        : count > 0
                        ? count +
                          " days from todays is " +
                          date.toLocaleDateString()
                        : Math.abs(count) +
                          " days ago is " +
                          date.toLocaleDateString()}
                </span>
            </div>
        </div>
    );
}

export default App;
