interface MovieCardProps {
  title: string;
  releaseDate: string;
  isBookmarked: boolean;
}

function MovieCard({ title, releaseDate, isBookmarked }: MovieCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{isBookmarked ? "북마크됨" : "북마크 안 됨"}</p>
    </article>
  );
}

export default MovieCard;
