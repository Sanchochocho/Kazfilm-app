import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Auth.css'

const Autorization = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem('user'));

        if (!savedUser) {
            alert("Пользователь не найден");
            return;
        }
        if (login === savedUser.login && password === savedUser.password) {
            localStorage.setItem('isAuth', "true");
            setIsAuth(true);
            navigate("/");
        } else {
            alert("Неверный логин или пароль");
        }
    };

    return (
        <div className="auth">
            <div className="auth_box">
                <h2>Вход</h2>

                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Войти</button>
                <p className="auth_switch">
                    Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    )
}

export default Autorization;