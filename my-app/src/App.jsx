import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapi, clearSwapi } from "./swapiReducer";

function App() {
  const [url, setUrl] = useState("https://swapi.py4e.com/api/people/1/");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  const handleFetch = () => {
    dispatch(fetchSwapi(url));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>SWAPI</h1>
      <input
        style={{ width: "400px" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleFetch}>Get info</button>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>

      <footer style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch(clearSwapi())}>Clear</button>
      </footer>
    </div>
  );
}
export default App;
