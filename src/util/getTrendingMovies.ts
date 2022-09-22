import axios from "axios";
export const getTrendingMovies = async (
  mediaType: "movie" | "tv" | "person" | "all",
  timeWindow: "day" | "week"
) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  //if mediaType is "all", we need to flatten the array to only have movies and tv shows
  if (mediaType === "all") {
    const movies = data.results.filter(
      (item: any) => item.media_type === "movie"
    );
    const tvShows = data.results.filter(
      (item: any) => item.media_type === "tv"
    );
    return [...movies, ...tvShows];
  }
  return data.results;
};
