import { useQuery } from "react-query";
import { RecommendedCard } from "..";
import { getRecommendedMedia } from "../../util/getRecommendedMedia";

const RecommendedMovies = () => {
  const { data: recommendedMedia } = useQuery(["getRecommendedMedia"], () =>
    getRecommendedMedia()
  );
  return recommendedMedia?.map((media: any) => (
    <RecommendedCard
      id={media.id}
      image={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
      year={media.release_date || media.first_air_date}
      title={media.title || media.name}
      type={"Movie"}
      pg={media.adult ? "18+" : "13+"}
    />
  ));
};

export default RecommendedMovies;
