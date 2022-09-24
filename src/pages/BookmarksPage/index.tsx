import React, { useEffect, useState } from "react";
import { RecommendedCard, Search } from "../../components";
import { getMoviesByIds } from "../../util/getMoviesByIds";

const BookmarksPage = () => {
  const bookmarks = JSON.parse(
    localStorage.getItem("bookmarkedItems") || "[]"
  ) as number[];
  const [bookmarkedMedia, setBookmarkedMedia] = useState<any[]>();
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    if (bookmarks.length <= 0) return;
    const movies = getMoviesByIds(bookmarks);
    movies.then((res) => {
      setBookmarkedMedia(res);
    });
  }, [bookmarks]);

  return (
    <main className="px-4 py-6 grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3 lg:grid-cols-4 lg:py-8 lg:overflow-y-auto lg:w-full">
      <Search
        placeholder="Search for bookmarked shows"
        className="col-span-2 md:col-span-3 lg:col-span-4"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <h1 className="text-xl font-light -tracking-[.31px] col-span-2 md:heading-l md:col-span-3 lg:col-span-4">
        Bookmarked movies
      </h1>
      {bookmarkedMedia &&
        bookmarkedMedia
          .filter((media) =>
            media.title.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((media: any) => (
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

export default BookmarksPage;
