import type { Movie } from "../../types/movie";
import { cn } from "../../utils/cn";
import "./movie-card.css";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <li className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          className="movie-card__poster"
          src={movie.posterPath}
          alt={movie.title}
        />
        <button
          type="button"
          className={cn(
            "movie-card__bookmark",
            movie.isBookmarked && "movie-card__bookmark--active",
          )}
          aria-pressed={movie.isBookmarked}
          aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            className="movie-card__bookmark-icon"
            src={movie.isBookmarked ? "/icons/bookmark.svg" : "/icons/bookmark-outline.svg"}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="movie-card__info">
        <p className="movie-card__title">{movie.title}</p>
        <p className="movie-card__release-date">{movie.releaseDate}</p>
      </div>
    </li>
  );
}

export default MovieCard;
