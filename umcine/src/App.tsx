import MovieCard from "./components/movie-card";
import "./App.css";

function App() {
  return (
    <main>
      <MovieCard title="오디세이" releaseDate="2026.08.05" isBookmarked={true} />
      <MovieCard title="토이 스토리 5" releaseDate="2026.06.17" isBookmarked={false} />
      <MovieCard title="듄: 파트 3" releaseDate="2027.01.15" isBookmarked={true} />
    </main>
  );
}

export default App;
