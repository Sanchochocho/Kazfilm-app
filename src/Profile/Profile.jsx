import './Profile.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favs);
    }, []);

    const removeFavorite = (id) => {
        const updated = favorites.filter(f => f.kinopoiskId !== id);
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    return (
        <div className="profile_page">
            <h1 className='profile_title'>Профиль</h1>
            <div className="info">
                <div className="ava">
                    <img src="./ava.jpg" alt="" className="avatarka" />
                </div>
                <p className='login'>Логин : {savedUser.login}</p>
                <p className='password'>Пароль : {savedUser.password}</p>
            </div>
            <h1 className='favorites_title'>Избранное</h1>
            <div className="favorites">
                {favorites.length > 0 ? (
                    favorites.map(film => (
                        <div className="fav_card" key={film.kinopoiskId}>
                            <img
                                src={film.posterUrlPreview}
                                onClick={() => navigate(`/film/${film.kinopoiskId}`)}
                            />
                            <button onClick={() => removeFavorite(film.kinopoiskId)}>
                                ⨳
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Нет избранных фильмов</p>
                )}
            </div>
        </div>
    )
}

export default Profile;