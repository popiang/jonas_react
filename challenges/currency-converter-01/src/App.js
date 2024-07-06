// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("USD");
    const [output, setOutput] = useState("OUTPUT");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function convert() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
                );

                if (!res.ok) {
                    throw new Error(
                        "Something went wrong with converting the currency"
                    );
                }

                const data = await res.json();

                setOutput(data.rates[to].toFixed(2));
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }
		
        if (from === to) {
            setOutput("");
            return;
        }

        if (amount < 1) return;

        convert();

        return function () {
            controller.abort();
        };
    }, [amount, from, to]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
                disabled={isLoading}
            />
            <select
                onChange={(e) => setFrom(e.target.value)}
                value={from}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                onChange={(e) => setTo(e.target.value)}
                value={to}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{isLoading ? "Converting..." : output}</p>
        </div>
    );
}
