import React from "react";

function MovieList({ movies }) {
  return (
    <div className="container pt-5">
      <div className="row">
      {movies !== undefined ? (
        movies.map((movie,id) => (
          <div key={id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card rounded border-black shadow" >
            <img 
              src={movie.Poster}
              className="card-img-top img-fluid " style={{height:'180px'}}
              alt="Movie Poster"/>
            <div className="card-body">
              <h5 className="card-title text-danger fs-6 ">{movie.Title}</h5>
            </div>
          </div>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
      </div>
    </div>
  );
}
 
export default MovieList;
