import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

const initalState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            };
        case "cities/loaded":
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            };
        case "city/loaded":
            return {
                ...state,
                isLoading: false,
                currentCity: action.payload,
            };
        case "city/created":
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
				currentCity: action.payload
            };
        case "city/deleted":
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
				currentCity: {}
            };
        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

function CitiesProvider({ children }) {
    const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
        reducer,
        initalState
    );

    useEffect(function () {
        async function fetchCities() {
            dispatch({ type: "loading" });
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                dispatch({ type: "cities/loaded", payload: data });
            } catch (error) {
                dispatch({
                    type: "rejected",
                    payload: "There was an error loading data...",
                });
            }
        }

        fetchCities();
    }, []);

    async function getCity(id) {

		if (Number(id) === currentCity.id) return;

        dispatch({ type: "loading" });
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            dispatch({ type: "city/loaded", payload: data });
        } catch (error) {
            dispatch({
                type: "rejected",
                payload: "There was an error loading data...",
            });
        }
    }

    async function createCity(newCity) {
        dispatch({ type: "loading" });
        try {
            const res = await fetch(`${BASE_URL}/cities/`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            dispatch({ type: "city/created", payload: data });
        } catch (error) {
            dispatch({
                type: "rejected",
                payload: "There was an error creating city...",
            });
        }
    }

    async function deleteCity(id) {
        dispatch({ type: "loading" });
        try {
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE",
            });
            dispatch({ type: "city/deleted", payload: id });
        } catch (error) {
            dispatch({
                type: "rejected",
                payload: "There was an error deleting city...",
            });
        }
    }

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
				error,
                currentCity,
                getCity,
                createCity,
                deleteCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);

    if (!context) {
        throw new Error("useCities must be inside CitiesProvider");
    }

    return context;
}

// eslint-disable-next-line
export { CitiesProvider, useCities };
