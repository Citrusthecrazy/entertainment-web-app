import React from "react";
import searchIcon from "../../assets/icon-search.svg";
type Props = {
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = (props: Props) => {
  return (
    <div
      className={`bg-transparent flex flex-row items-center gap-4 md:heading-m ${props.className}`}>
      <img src={searchIcon} alt="search" className="w-6 h-6 md:w-8 md:h-8" />
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="bg-inherit text-inherit w-full focus:outline-none"
      />
    </div>
  );
};

export default Search;
