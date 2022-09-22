import React from "react";
import BookmarkButton from "../BookmarkButton";

type Props = {
  id: number;
  image: string;
  title: string;
  year: string;
  type: string;
  pg: string;
};

const RecommendedCard = (props: Props) => {
  return (
    <div className="relative">
      <img
        src={props.image}
        alt={props.title}
        className="rounded-lg w-full h-[110px] object-cover"
      />
      <p className="text-[11px] font-light text-white/80 mt-4">
        {new Date(props.year).getFullYear()} -{" "}
        <span className="capitalize">{props.type}</span> - {props.pg}
      </p>
      <span className="text-[14px] font-normal mt-4">{props.title}</span>
      <BookmarkButton mediaId={props.id} className="absolute top-2 right-2" />
    </div>
  );
};

export default RecommendedCard;
