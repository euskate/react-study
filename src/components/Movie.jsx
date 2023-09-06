import React from "react";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <img src={coverImg} alt="movie_image" />
    </div>
  );
}

Movie.propTypes = {};
export default Movie;
