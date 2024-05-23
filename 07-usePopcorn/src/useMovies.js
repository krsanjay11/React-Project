import { useState, useEffect } from "react";

const KEY = "3c228bbd";

// export function useMovies(query, callback) {
// const { movies, isLoading, error } = useMovies(query, handleCloseMovie); // calling custom hook

export function useMovies(query) {
  // named export
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // callback?.(); // call if it exists

      const controller = new AbortController(); // browser API
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong while fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not Found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message, err.name);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  ); // function, dependency array - [] means the effect that we specified will only run on mount (when App component will render for the very first time)
  return { movies, isLoading, error };
}
