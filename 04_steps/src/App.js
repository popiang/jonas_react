import { useEffect, useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        setStep(1);
    }, []);

    const handlePrevClick = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1);
        }
    };

    const handleNextClick = () => {
        if (step < 3) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleCloseClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            <button className="close" onClick={handleCloseClick}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step === 3 ? "active" : ""}>3</div>
                    </div>

                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>

                    <div className="buttons">
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            handleClick={handlePrevClick}
                        >
                            <span>👈🏻</span> Previous
                        </Button>

                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            handleClick={handleNextClick}
                        >
                            Next <span>👉🏻</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}

function Button({ textColor, bgColor, handleClick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default App;
