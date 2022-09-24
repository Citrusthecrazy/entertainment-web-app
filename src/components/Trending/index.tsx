import React from "react";
import { useQuery } from "react-query";
import { TrendingCard } from "..";
import { getTrendingMovies } from "../../util/getTrendingMovies";
const Trending = () => {
  const { data: trending } = useQuery(
    "trending",
    () => getTrendingMovies("all", "week"),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  return (
    <ul className="col-span-2 overflow-y-hidden no-scrollbar flex flex-row gap-4 md:col-span-3">
      {trending?.map((trendingItem: any) => (
        <li key={trendingItem.id} className="flex items-center space-x-4">
          <TrendingCard
            id={trendingItem.id}
            image={`https://image.tmdb.org/t/p/w500${trendingItem.poster_path}`}
            year={trendingItem.release_date || trendingItem.first_air_date}
            title={trendingItem.title || trendingItem.name}
            type={trendingItem.media_type}
            pg={trendingItem.adult ? "18+" : "13+"}
          />
        </li>
      ))}
    </ul>
  );
};

export default Trending;
