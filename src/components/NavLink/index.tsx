import React from "react";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  alt: string;
};

const NavLink = (props: Props) => {
  return (
    <li>
      <Link to="/">
        <img src={props.image} alt={props.alt} />
      </Link>
    </li>
  );
};

export default NavLink;
