import axios from "axios";

const getMovieById = async (id: number) => {
  const { data, status } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US`
  );
  if (status !== 200) {
    throw new Error("Error fetching movie");
  }
  return data;
};

export const getMoviesByIds = async (movieIds: number[]) => {
  let movies = [];
  for (let i = 0; i < movieIds.length; i++) {
    const movie = await getMovieById(movieIds[i]);
    movies.push(movie);
  }
  return movies;
};
