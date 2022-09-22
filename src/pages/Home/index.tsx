import React from "react";
import {
  RecommendedCard,
  RecommendedMovies,
  Search,
  Trending,
} from "../../components";

const Home = () => {
  return (
    <div className="px-4 py-6 grid grid-cols-2 gap-y-6 gap-x-4">
      <Search
        placeholder="Search for movies or TV series"
        className="w-full col-span-2"
      />
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2">
        Trending
      </h1>
      <Trending />
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2">
        Recomended for you
      </h1>
      <RecommendedMovies />
    </div>
  );
};

export default Home;
