import './Header.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Header = ({ menu, setMenu }) => {

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menu]);

    const logout = () =>{
        localStorage.removeItem('isAuth');
        window.location.reload();
    }

    

    return (
        <div className="header">
            <div className="di_title">
                <h1>Salem Cinema</h1>
                <p>Популярные комедии</p>
            </div>
            <img className="menu" src="/Group.png" alt="" onClick={() => setMenu(true)} />
            {menu && (
                <>
                    <div className="overlay" onClick={() => setMenu(false)}></div>
                    <div className="menu_window">
                        <ul>
                            <img src="/fontisto_close.png" className="close" alt="" onClick={() => setMenu(false)} />
                            <Link to={"/"} onClick={() => setMenu(false)}><li className="page_link">Фильмы</li></Link>
                            <Link to={"/search"} onClick={() => setMenu(false)}><li className="page_link">Поиск</li></Link>
                            <Link to={"/profile"} onClick={() => setMenu(false)}><li className="page_link">Профиль / Избранное</li></Link>
                            <Link onClick={()=>logout()}><li className="page_link">Выход</li></Link>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default Header;