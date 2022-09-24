import { useEffect, useState } from "react";
import { RecommendedMovies, Search, Trending } from "../../components";
import { SearchResults } from "../../widgets";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  if (searchValue) {
    return (
      <main className="px-4 py-6 grid grid-cols-2 gap-y-6 gap-x-4">
        <Search
          placeholder="Search for movies or TV series"
          className="w-full col-span-2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchResults searchValue={searchValue} />
      </main>
    );
  }
  return (
    <main className="px-4 py-6 grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3">
      <Search
        placeholder="Search for movies or TV series"
        className="w-full col-span-2 md:col-span-3"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2 md:col-span-3">
        Trending
      </h1>
      <Trending />
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2 md:col-span-3">
        Recomended for you
      </h1>
      <RecommendedMovies />
    </main>
  );
};

export default Home;
