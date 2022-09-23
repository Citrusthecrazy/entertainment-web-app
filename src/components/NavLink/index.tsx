import React from "react";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  alt: string;
  to: string;
};

const NavLink = (props: Props) => {
  return (
    <li>
      <Link to={props.to}>
        <img src={props.image} alt={props.alt} />
      </Link>
    </li>
  );
};

export default NavLink;
