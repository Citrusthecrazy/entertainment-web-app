import React, { HTMLProps, useState } from "react";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFilled from "../../assets/icon-bookmark-full.svg";

type Props = {
  mediaId: number;
  isBookmarked?: boolean;
};

const BookmarkButton = ({
  className,
  mediaId,
}: HTMLProps<HTMLButtonElement> & Props) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("bookmarkedItems") || "[]").includes(
      mediaId
    )
  );

  const handleBookmark = () => {
    const bookmarkedItems = JSON.parse(
      localStorage.getItem("bookmarkedItems") || "[]"
    ) as number[];
    if (bookmarkedItems.includes(mediaId)) {
      const newBookmarks = bookmarkedItems.filter((id) => id !== mediaId);
      localStorage.setItem("bookmarkedItems", JSON.stringify(newBookmarks));
      setIsBookmarked(false);
    } else {
      const bookmarkedItems = JSON.parse(
        localStorage.getItem("bookmarkedItems") || "[]"
      ) as number[];
      const newBookmarks = [...bookmarkedItems, mediaId];
      localStorage.setItem("bookmarkedItems", JSON.stringify(newBookmarks));
      setIsBookmarked(true);
    }
  };

  return (
    <button
      className={`bg-darkBlue/50 rounded-full px-[10px] py-[9px] ${className}`}
      onClick={() => handleBookmark()}>
      <img
        src={!isBookmarked ? bookmarkEmpty : bookmarkFilled}
        alt="bookmark"
        className="md:w-[11px] md:h-[14px]"
      />
    </button>
  );
};

export default BookmarkButton;
