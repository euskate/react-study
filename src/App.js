import { useCallback, useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies);
  return (
    <div>
      <h1>Movie</h1>
      {loading ? (
        <h1>"loading..."</h1>
      ) : (
        <div>
          {movies.map(movie => <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>{movie.genres ?? movie.genres.map(g => <li>{g}</li>)}</ul>
            <img src={movie.medium_cover_image} alt="movie_image" />
          </div>)}
        </div>)}
    </div>
  );
}

export default App;
