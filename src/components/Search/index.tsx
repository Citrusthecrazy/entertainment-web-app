import React from "react";
import searchIcon from "../../assets/icon-search.svg";
type Props = {
  placeholder: string;
  className?: string;
};

const Search = (props: Props) => {
  return (
    <div
      className={`bg-transparent flex flex-row items-center gap-4 ${props.className}`}>
      <img src={searchIcon} alt="search" className="w-6 h-6" />
      <input
        type="text"
        placeholder={props.placeholder}
        className="bg-inherit text-inherit w-full focus:outline-none"
      />
    </div>
  );
};

export default Search;
