import { Navbar } from "./widgets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookmarksPage, Home, MoviesPage, TvShowsPage } from "./pages";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TvShowsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
