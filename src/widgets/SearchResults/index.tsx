import axios from "axios";
import { useEffect, useState } from "react";
import { RecommendedCard } from "../../components";

type Props = {
  searchValue: string;
};

const SearchResults = ({ searchValue }: Props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!searchValue) return;
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      axios
        .get(
          `
          https://api.themoviedb.org/3/search/multi?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&language=en-US&query=${searchValue}&page=1&include_adult=false`
        )
        .then((res) => {
          console.log(res.data);
          setResults(res.data.results);
          setLoading(false);
        });
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);
  if (loading) {
    return (
      <>
        <h1 className="text-xl font-light -tracking-[.31px] col-span-2 md:heading-l md:col-span-3">
          Loading...
        </h1>
      </>
    );
  }
  return (
    <>
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2 md:heading-l  md:col-span-3">
        Showing results for '{searchValue}'
      </h1>
      {results.length > 0 ? (
        results.map((media: any) => (
          <RecommendedCard
            key={media.id}
            id={media.id}
            image={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            year={media.release_date || media.first_air_date}
            title={media.title || media.name}
            type={media.media_type}
            pg={media.adult ? "18+" : "13+"}
          />
        ))
      ) : (
        <h2 className="text-lg font-light -tracking-[.31px]">
          No results found
        </h2>
      )}
    </>
  );
};

export default SearchResults;
