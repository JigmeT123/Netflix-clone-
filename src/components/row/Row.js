import React, {useEffect, useState} from 'react'
import axios from '../../requests/axios';
import styles from './row.module.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Row = ({title, fetchURL, isLarge}) => {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');
    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL('')
        }else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then(url => {
                let urlParams =  new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            })
            .catch(err=> console.log(err))
        }
    }
    const baseImageUrl = "https://image.tmdb.org/t/p/original/";
    const opts = {
        height : "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    useEffect(() => {
        async function fetchMoviesData() {
            const requests = await axios.get(fetchURL);
            setMovies(requests.data.results);
            return requests;
        }
        fetchMoviesData();
    }, [fetchURL])
    console.log(movies)

    return (
        <div className={styles.row}>
            <h1>{title}</h1>
            <div className={styles.row__posters}>
                {movies.map(movie => (
                    <img onClick={()=>handleClick(movie)} key={movie.id} className={`${styles.row__poster} ${isLarge && styles.row__largePoster}`} src={`${baseImageUrl}${isLarge ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts}></YouTube>}
        </div>
    )
}

export default Row
