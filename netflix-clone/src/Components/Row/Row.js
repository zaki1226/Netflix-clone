import React from 'react'
import { useState,useEffect } from 'react'
import './row.css'
import axios from '../../utils/axios'  
import MovieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])    
    const [trailerUrl, setTrailerUrl] = useState("")

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                console.log(fetchUrl)
                const response = await axios.get(fetchUrl);
                console.log(response)
                setMovies(response.data?.results || []);
            } catch (error) {
                console.log("Failed to fetch movies");
            }
        };
        fetchMovies();
    }, [fetchUrl]);
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            MovieTrailer(movie?.name || movie?.title || movie?.original_name)
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams)
                    console.log((urlParams.get("v")));
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };          
  return (
    <div> 
        <div className="row">
            <div className="row_title">
              <h1>{title}</h1>
            </div>

        <div className="row_posters">
                {movies.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index} src ={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    />
                ))} 
        </div>
        <div style={{padding: "20px"}}>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
        </div>
    </div>
  )
}
export default Row