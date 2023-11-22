import { useState } from "react";

function App() {
    const [bill, setBill] = useState(0);
    const [yourPercent, setYourPercent] = useState(0);
    const [yourFriendPercent, setYourFriendPercent] = useState(0);

    const handleResetClick = () => {
        setBill(0);
        setYourPercent(0);
        setYourFriendPercent(0);
    };

    return (
        <div>
            <Bill onSetBill={setBill} bill={bill} />
            <SelectPercentage
                onSetPercent={setYourPercent}
                percent={yourPercent}
            >
                How did you like the service?
            </SelectPercentage>
            <SelectPercentage
                onSetPercent={setYourFriendPercent}
                percent={yourFriendPercent}
            >
                How did your friend like the service?
            </SelectPercentage>
            {bill > 0 && (
                <>
                    <Tip
                        bill={bill}
                        yourPercent={yourPercent}
                        yourFriendPercent={yourFriendPercent}
                    />
                    <Button onHandleClick={handleResetClick}>Reset</Button>
                </>
            )}
        </div>
    );
}

function Bill({ onSetBill, bill }) {
    return (
        <div>
            <span>How much was the bill? </span>
            <input
                type="number"
                onChange={(e) => onSetBill(e.target.value)}
                value={bill}
            />
        </div>
    );
}

function SelectPercentage({ onSetPercent, children, percent }) {
    return (
        <div>
            <span>{children}</span>
            <select
                onChange={(e) => onSetPercent(e.target.value)}
                value={percent}
            >
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing (20%)</option>
            </select>
        </div>
    );
}

function Tip({ bill, yourPercent, yourFriendPercent }) {
    const totalTip = bill * yourPercent + bill * yourFriendPercent;
    const totalPay = bill + totalTip;

    return (
        <div>
            <h2>{`You pay $${totalPay} ($${bill} + $${totalTip} tip)`}</h2>
        </div>
    );
}

function Button({ children, onHandleClick }) {
    return <button onClick={onHandleClick}>{children}</button>;
}

export default App;
