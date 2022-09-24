import React, { useState } from "react";
import { useQuery } from "react-query";
import { RecommendedCard, Search } from "../../components";
import { getTrendingMovies } from "../../util/getTrendingMovies";
import { SearchResults } from "../../widgets";

const TvShowsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: trendingMovies } = useQuery(["getTrendingTvShows"], () =>
    getTrendingMovies("tv", "week")
  );
  if (searchValue) {
    return (
      <main className="px-4 py-6 grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3">
        <Search
          placeholder="Search for TV series"
          className="w-full col-span-2 md:col-span-3"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchResults searchValue={searchValue} />
      </main>
    );
  }
  return (
    <main className="px-4 py-6 grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3 lg:grid-cols-4 lg:py-8 lg:overflow-y-auto lg:w-full">
      <Search
        placeholder="Search for TV series"
        className="col-span-2 md:cols-span-3 lg:col-span-4"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2 md:heading-l md:col-span-3 lg:col-span-4">
        TV Series
      </h1>
      {trendingMovies &&
        trendingMovies.map((media: any) => (
          <RecommendedCard
            key={media.id}
            id={media.id}
            image={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            year={media.release_date || media.first_air_date}
            title={media.title || media.name}
            type={media.media_type}
            pg={media.adult ? "18+" : "13+"}
          />
        ))}
    </main>
  );
};

export default TvShowsPage;
