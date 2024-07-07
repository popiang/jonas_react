import { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

const KEY = "ac0c21b8";

export function useMovies(query, callback) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const debouncedFetchMoviesRef = useRef(
        debounce((query, controller) => fetchMovies(query, controller), 300)
    );

    const fetchMovies = async (query, controller) => {
        try {
            setIsLoading(true);
            setError("");

            const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
            );

            if (!res.ok)
                throw new Error("Something went wrong with fetching movies");

            const data = await res.json();

            if (data.Response === "False") throw new Error("Movie not found");

            setMovies(data.Search);
            setError("");
        } catch (error) {
            if (error.name !== "AbortError") {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(
        function () {
			callback?.();

            const controller = new AbortController();

            if (query.length < 3) {
                setMovies([]);
                setError("");
                return;
            }

            // handleCloseMovie();
            debouncedFetchMoviesRef.current(query, controller);

            return function () {
                controller.abort();
            };
        },
        [query, callback]
    );

	return {movies, isLoading, error}
}
