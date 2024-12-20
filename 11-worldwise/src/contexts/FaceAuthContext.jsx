import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "logout":
            return { ...state, user: null, isAuthenticated: false };
        default:
            return state;
    }
};

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

export function AuthContextProvider({ children }) {
    const [{ user, isAuthenticated }, dispatch] = useReducer(
        reducer,
        initialState
    );

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({ type: "login", payload: FAKE_USER });
        }
    }

    function logout() {
		console.log("logout")
        dispatch({ type: "logout" });
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line
export function useAuthContext() {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error(
            "useAuthContext must be used inside AuthContextProvider"
        );

    return context;
}
