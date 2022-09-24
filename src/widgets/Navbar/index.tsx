import logo from "../../assets/logo.svg";
import home from "../../assets/icon-nav-home.svg";
import movies from "../../assets/icon-nav-movies.svg";
import tvSeries from "../../assets/icon-nav-tv-series.svg";
import bookmarks from "../../assets/icon-nav-bookmark.svg";
import avatar from "../../assets/image-avatar.png";
import { NavLink } from "../../components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="bg-semiDarkBlue h-14 py-[18px] px-4 flex flex-row items-center
                         justify-between w-full md:w-auto md:m-6 md:rounded-[10px]
                         lg:h-auto lg:flex-col lg:m-8 lg:px-8 lg:py-[35px]">
      <Link to="/">
        <img src={logo} alt="logo" className="lg:w-8 lg:h-[25px]" />
      </Link>
      <nav>
        <ul className="flex flex-row gap-6 lg:flex-col">
          <NavLink to="/" image={home} alt="home" />
          <NavLink to="/movies" image={movies} alt="movies" />
          <NavLink to="/tv-series" image={tvSeries} alt="tv series" />
          <NavLink to="/bookmarks" image={bookmarks} alt="bookmarks" />
        </ul>
      </nav>
      <img
        src={avatar}
        alt=""
        className="w-6 h-6 rounded-full ring-1 ring-white"
      />
    </header>
  );
};

export default Navbar;
