import { useEffect, useState } from "react";
import MovieGrid from "../../components/movies/movie-grid";
import Pagination from "../../components/movies/pagination";
import { movies as initialMovies } from "../../data/movies";
import { readBookmarkIds, saveBookmarkIds } from "../../utils/bookmark-storage";

const MOVIES_PER_PAGE = 10;

export function MovieListPage() {
  const [bookmarkedMovieIds, setBookmarkedMovieIds] =
    useState<number[]>(readBookmarkIds);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    saveBookmarkIds(bookmarkedMovieIds);
  }, [bookmarkedMovieIds]);

  const movies = initialMovies.map((movie) => ({
    ...movie,
    isBookmarked: bookmarkedMovieIds.includes(movie.id),
  }));

  function handleToggleBookmark(movieId: number) {
    setBookmarkedMovieIds((currentIds) =>
      currentIds.includes(movieId)
        ? currentIds.filter((id) => id !== movieId)
        : [...currentIds, movieId],
    );
  }

  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);
  const pagedMovies = movies.slice(
    (currentPage - 1) * MOVIES_PER_PAGE,
    currentPage * MOVIES_PER_PAGE,
  );

  return (
    <main className="mx-auto w-full max-w-[1126px] flex-1 px-6 py-8 pb-16">
      <h1 className="mb-6 text-left text-[28px] font-extrabold text-app-text-h">
        영화 목록
      </h1>
      <MovieGrid movies={pagedMovies} onToggleBookmark={handleToggleBookmark} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
