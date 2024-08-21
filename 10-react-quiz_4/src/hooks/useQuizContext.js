import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

export const useQuizContext = () => {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error("useQuizContext must be inside QuizContextProvider");
    }

    return context;
};
