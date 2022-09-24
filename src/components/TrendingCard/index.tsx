import React from "react";
import { BookmarkButton } from "..";

type Props = {
  id: number;
  image: string;
  title: string;
  year: string;
  type: string;
  pg: string;
};

const TrendingCard = (props: Props) => {
  const date = new Date(props.year);
  return (
    <div
      className={`rounded-lg relative w-60 h-[140px] overflow-hidden md:w-[470px] md:h-[230px]`}>
      <img
        src={props.image}
        alt={props.title}
        className="inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-4 left-4 flex flex-col gap-1">
        <p className="text-xs md:body-m">
          {date.getFullYear()} -{" "}
          <span className="capitalize">{props.type}</span> - {props.pg}
        </p>
        <h1 className="body-l font-normal truncate md:heading-s">
          {props.title}
        </h1>
      </div>
      <BookmarkButton mediaId={props.id} className="absolute top-2 right-2" />
    </div>
  );
};

export default TrendingCard;
