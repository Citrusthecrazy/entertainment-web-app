import React, { HTMLProps } from "react";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFilled from "../../assets/icon-bookmark-full.svg";

type Props = {
  mediaId: number;
};

const BookmarkButton = ({
  className,
  mediaId,
}: HTMLProps<HTMLButtonElement> & Props) => {
  return (
    <button className={`bg-darkBlue/50 rounded-full p-2 ${className}`}>
      <img src={bookmarkEmpty} alt="bookmark" />
    </button>
  );
};

export default BookmarkButton;
