import { useParams, useNavigate } from "react-router-dom";
import "./FilmInfo.css";

const FilmInfo = ({ films }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const film = films.find(f => f.kinopoiskId == id);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isExist = favorites.find(f => f.kinopoiskId === film.kinopoiskId);

    if (isExist) {
      alert("Уже в избранном");
      return;
    }

    favorites.push(film);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Добавлено в избранное");
  };

  return (
    <div className="film_page">
      <div className="film_top">

        <div className="film_poster">
          <button className="back_btn" onClick={() => navigate(`/`)}>
            ← Назад
          </button>

          <img src={film.posterUrl} alt="" />
        </div>
      </div>

      <button className="fav_btn" onClick={handleFavorite}>
        В избранное
      </button>

      <div className="film_info">
        <h1>{film.nameRu}</h1>

        <div className="film_meta">
          <span>{film.year}</span>
          <span>★ {film.ratingKinopoisk || "—"}</span>
        </div>

        <div className="film_tags">
          {film.genres.map((g, i) => (
            <span key={i}>{g.genre}</span>
          ))}
        </div>

        <p className="film_country">
          {film.countries.map(c => c.country).join(", ")}
        </p>

        <a href="https://youtu.be/sfwiwj78TWg?t=5"><button className="watch_btn">Смотреть</button></a>
      </div>

    </div>
  );
};

export default FilmInfo;