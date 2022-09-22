import axios from "axios";
export const getRecommendedMedia = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=1`
  );

  return data.results;
};
