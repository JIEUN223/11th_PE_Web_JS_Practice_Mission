export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  isBookmarked: boolean;
}

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <li>
      <span>{movie.title}</span>
      <span>{movie.releaseDate}</span>
      <button
        aria-pressed={movie.isBookmarked}
        onClick={() => onToggleBookmark(movie.id)}
      >
        {movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
      </button>
    </li>
  );
}

export default MovieCard;
