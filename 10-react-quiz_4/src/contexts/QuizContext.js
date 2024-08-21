import { createContext, useEffect, useReducer } from "react";

export const QuizContext = createContext();

const initialState = {
    questions: [],
	numQuestions: 0,
	maxPossiblePoints: 0,
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: 300,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
				numQuestions: action.payload.length,
				maxPossiblePoints: action.payload.reduce((prev, cur) => prev + cur.points, 0),
                status: "ready",
            };
        case "dataFailed":
            return {
                ...state,
                status: "error",
            };
        case "start":
            return {
                ...state,
                status: "active",
            };
        case "newAnswer":
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        case "nextQuestion":
            return {
                ...state,
                index: state.index++,
                answer: null,
            };
        case "finish":
            return {
                ...state,
                status: "finished",
                highscore:
                    state.points > state.highscore
                        ? state.points
                        : state.highscore,
            };
        case "restart":
            return {
                ...initialState,
                status: "ready",
                questions: state.questions,
            };
        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status:
                    state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Action unknown!!");
    }
}

export const QuizContextProvider = ({ children }) => {
    const [
        {
            questions,
			numQuestions,
			maxPossiblePoints,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((error) => dispatch({ type: "dataFailed" }));

        console.log("questions fetched");
    }, []);

    return (
        <QuizContext.Provider
            value={{
                questions,
				numQuestions,
				maxPossiblePoints,
                status,
                index,
                answer,
                points,
                highscore,
                secondsRemaining,
                dispatch,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
