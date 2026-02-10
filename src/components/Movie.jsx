// includes fav button
// movie card includes ratings, description, date, title

function Movie({movie, cardType}) {
  return (
    <div className={cardType}>
      <img src={movie.image} alt={movie.title} />
     
    </div>
  );
}

export default Movie;