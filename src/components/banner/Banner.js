import React, {useEffect, useState} from 'react'
import styles from './banner.module.css';
import requests from '../../requests/request';
import axios from '../../requests/axios';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    const truncate = (str, n) => str?.length > n ? str.substring(0, n-1) + '...': str;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]
            );
            return requests;
        }
        fetchData();
    }, []);
    return (
        <header
            className={styles.banner}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}>
                <div className={styles.banner_contents}>
                    <h1 className={styles.banner__title}>{movies?.name || movies?.title || movies?.original_name}</h1>
                    <div className={styles.banner__btns}>
                        <button className={styles.banner__btn}>Play</button>
                        <button className={styles.banner__btn}>MyList</button>
                    </div>
                    <h1 className={styles.banner__description}>
                        {truncate(movies?.overview, 150)}
                    </h1>
                </div>
                <div className={styles.bannerfadeBottom}></div>
        </header>
    )
}

export default Banner