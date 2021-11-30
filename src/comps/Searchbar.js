import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import "./Searchbar.css";

export default function SearchBar() {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `?${createSearchParams({ q: term })}`,
    });
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          id="search"
          required
        />
      </form>
    </div>
  );
}
