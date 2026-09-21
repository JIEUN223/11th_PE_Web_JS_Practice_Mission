import { useState } from "react";
import MovieCard, { type Movie } from "./components/movie-card";
import "./App.css";

const initialMovies: Movie[] = [
  {
    id: 1,
    title: "오디세이",
    releaseDate: "2026.08.05",
    isBookmarked: true,
  },
  {
    id: 2,
    title: "토이 스토리 5",
    releaseDate: "2026.06.17",
    isBookmarked: false,
  },
  {
    id: 3,
    title: "듄: 파트 3",
    releaseDate: "2027.01.15",
    isBookmarked: false,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleToggleBookmark(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  }

  return (
    <main>
      <h1>영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleBookmark={handleToggleBookmark}
          />
        ))}
      </ul>
    </main>
  );
}
