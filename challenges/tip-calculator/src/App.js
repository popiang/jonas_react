import { useState } from "react";
import "./index.css";

export default function App() {
    return <TipCalculator />;
}

function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [myRating, setMyRating] = useState(0);
    const [myFriendRating, setMyFriendRating] = useState(0);

    function handleReset() {
        setBill(0);
        setMyRating(0);
        setMyFriendRating(0);
    }

    return (
        <div>
            <Bill onHandleSetBill={setBill} bill={bill} />
            <ServiceRate onHandleSetRating={setMyRating} rating={myRating}>
                How did you like the service?
            </ServiceRate>
            <ServiceRate
                onHandleSetRating={setMyFriendRating}
                rating={myFriendRating}
            >
                How did your friend like the service?
            </ServiceRate>
            {bill > 0 && (
                <>
                    <Display
                        bill={bill}
                        myRating={myRating}
                        myFriendRating={myFriendRating}
                    />
                    <Reset onHandleReset={handleReset} />
                </>
            )}
        </div>
    );
}

function Bill({ onHandleSetBill, bill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type="text"
                onChange={(e) => onHandleSetBill(e.target.value)}
                value={bill}
            />
        </div>
    );
}

function ServiceRate({ children, onHandleSetRating, rating }) {
    return (
        <div>
            <label>{children}</label>
            <select
                onChange={(e) => onHandleSetRating(Number(e.target.value))}
                value={rating}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absoutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Display({ bill, myRating, myFriendRating }) {
    const averageRate = (myRating + myFriendRating) / 2;
    const tips = bill * (averageRate / 100);
    const totalBill = Number(tips) + Number(bill);

    return <h2>{`You pay $${totalBill} ($${bill} + $${tips} tip)`}</h2>;
}

function Reset({ onHandleReset }) {
    return (
        <div>
            <button onClick={onHandleReset}>Reset</button>
        </div>
    );
}
