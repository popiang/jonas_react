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
	}

    return (
        <>
			<button className="close" onClick={handleCloseClick}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step === 3 ? "active" : ""}>3</div>
                    </div>

                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handlePrevClick}
                        >
                            Previous
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNextClick}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
