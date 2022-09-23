import { Navbar } from "./widgets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, MoviesPage, TvShowsPage } from "./pages";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TvShowsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
