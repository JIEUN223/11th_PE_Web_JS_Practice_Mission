import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import MovieGrid from "./components/movies/movie-grid";
import Pagination from "./components/movies/pagination";
import { movies as initialMovies } from "./data/movies";
import "./App.css";

const MOVIES_PER_PAGE = 10;

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);

  function handleToggleBookmark(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  }

  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);
  const pagedMovies = movies.slice(
    (currentPage - 1) * MOVIES_PER_PAGE,
    currentPage * MOVIES_PER_PAGE,
  );

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <h1 className="app__title">영화 목록</h1>
        <MovieGrid movies={pagedMovies} onToggleBookmark={handleToggleBookmark} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
