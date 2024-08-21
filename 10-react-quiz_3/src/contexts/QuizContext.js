import { createContext, useEffect, useReducer } from "react";

export const QuizContext = createContext();

const SECONDS_PER_QUESTION = 30;

const initialState = {
    questions: [],
    numQuestions: 0,
    maxPossiblePoints: 0,
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: 10,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                numQuestions: action.payload.length,
                maxPossiblePoints: action.payload.reduce(
                    (prev, cur) => prev + cur.points,
                    0
                ),
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
                secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
            };
        case "newAnswer":
            // get the actual current question based on the index
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
                index: state.index + 1,
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
                ...state,
                status: "ready",
                index: 0,
                answer: null,
                points: 0,
                secondsRemaining: null,
            };
        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status:
                    state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            return state;
    }
};

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

    useEffect(() => {
        fetch("http://localhost:8000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((error) => dispatch({ type: "dataFailed" }));
    }, [dispatch]);

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
