import "./Search.css";
import { useSearchParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../comps/RecipeList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams({});

  const { error, data, isPending } = useFetch(
    "http://localhost:3000/recipes?q=" + searchParams.get("q")
  );

  return (
    <div>
      <h2 className="page-title">
        Recipes including "{searchParams.get("q")}"
      </h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
