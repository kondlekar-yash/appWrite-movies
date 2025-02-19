const MovieCard = ({ movie }) => {
  const {
    primaryTitle,
    primaryImage,
    averageRating,
    spokenLanguages,
    releaseDate,
  } = movie;
  return (
    <div className="movie-card">
      <img
        src={primaryImage ? primaryImage : "/no-movie.png"}
        alt={primaryTitle}
      />

      <div className="mt-4">
        <h3>{primaryTitle}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{averageRating ? averageRating?.toFixed(1) : "N/A"}</p>
          </div>

          <span>•</span>
          <p className="lang">{spokenLanguages && spokenLanguages[0]}</p>

          <span>•</span>
          <p className="year">
            {releaseDate ? releaseDate?.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
