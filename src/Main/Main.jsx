import { useNavigate } from "react-router-dom";
import './Main.css'

const Main = ({ films }) => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1608889175123-8ee362201f81"
          alt="banner"
        />
        <div className="banner_overlay">
          <h2>Лучшие комедии 🍿</h2>
        </div>
      </div>

      <div className="grid">
        {films.map(film => (
          <div className="card" key={film.kinopoiskId}>
            <img src={film.posterUrlPreview} alt="" onClick={() => navigate(`/film/${film.kinopoiskId}`)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main;