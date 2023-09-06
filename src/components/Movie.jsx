import React from "react";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <img src={coverImg} alt="movie_image" />
    </div>
  );
}

Movie.propTypes = {};
export default Movie;
