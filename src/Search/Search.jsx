import './Search.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Search = ({ films }) => {
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        if (query === '') {
            setResults(films);
            return;
        }

        const filtered = films.filter(film =>
            film.nameRu?.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
    }, [debouncedQuery, films]);

    return (
        <div className="search_page">

            <div className="input">
                <img src="/Kazfilm-app/Vector.png" alt="" />
                <input
                    type="text"
                    placeholder="Найти фильм"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <p className='result'>
                Результаты: {results.length}
            </p>

            <div className="search_grid">
                {results.length > 0 ? (
                    results.map(film => (
                        <div className="search_card" key={film.kinopoiskId}>
                            <img
                                src={film.posterUrlPreview}
                                alt=""
                                onClick={() => navigate(`/film/${film.kinopoiskId}`)}
                            />
                        </div>
                    ))
                ) : (
                    <p>Ничего не найдено (╥_╥)</p>
                )}
            </div>

        </div>
    )
}

export default Search;