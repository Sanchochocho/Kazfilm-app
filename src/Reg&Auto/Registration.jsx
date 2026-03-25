import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Auth.css'

const Registration = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!login || !password) {
            alert("Заполни все поля");
            return;
        }

        const user = { login, password };

        localStorage.setItem('user', JSON.stringify(user));
        alert("Регистрация успешна!");
        navigate('/login')
    };

    return (
        <div className="auth">
            <div className="auth_box">
                <h2>Регистрация</h2>

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

                <button onClick={handleRegister}>Зарегистрироваться</button>
                <p className="auth_switch">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    )
}

export default Registration;