import Main from "./Main/Main";
import FilmInfo from "./FilmInfo/FilmInfo";
import Header from "./Header/Header";
import Autorization from "./Reg&Auto/Authorization";
import Registration from "./Reg&Auto/Registration";
import Search from "./Search/Search";
import Profile from "./Profile/Profile";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=67&genres=13&type=FILM`;
  const [films, setFilms] = useState([])
  const [menu, setMenu] = useState(false)
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (auth) setIsAuth(true);
  }, []);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'b42a1e9e-0ffd-49a7-9432-148781420518',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setFilms(data.items))
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      {isAuth && <Header menu={menu} setMenu={setMenu} />}
      <Routes>

        {!isAuth && (
          <>
            <Route path="/login" element={<Autorization setIsAuth={setIsAuth} />} />
            <Route path="/register" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
            
          </>
        )}

        {isAuth && (
          <>
            <Route path="/" element={<Main films={films} />} />
            <Route path="/film/:id" element={<FilmInfo films={films} />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/search" element={<Search films={films} />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}

      </Routes>
    </BrowserRouter>
  );
}

export default App;