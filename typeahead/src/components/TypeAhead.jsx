import { useEffect, useState } from "react";

const STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

export default function TypeAhead() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;
    setStatus(STATUS.LOADING);
    fetch(`https://dummyjson.com/products/search?q=${debouncedQuery}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.products);
        setStatus(STATUS.SUCCESS);
      })
      .catch((err) => setStatus(STATUS.ERROR));
  }, [debouncedQuery]);
  return (
    <div className="container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {status === STATUS.IDLE && <div>Start Typing...</div>}
      {status === STATUS.LOADING && <div>...Loading</div>}
      {status === STATUS.ERROR && <div>Error occured</div>}

      {status === STATUS.SUCCESS && (
        <ul>
          {results.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
