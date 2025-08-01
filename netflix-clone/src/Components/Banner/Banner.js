import axios from '../../utils/axios';
import requests from '../../utils/requests';
import { useEffect, useState } from 'react';
import './banner.css'

const Banner = () => {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
  const fetchData = async () => {
    try {
      const request = await axios.get(requests.fetchNetflixoriginals);
      console.log(request);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // <-- Call the async function here
}, []);

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}

  return (
    <div className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
      //height: "448px"
    }}>

        <div className='banner__contents'>  
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1> 
            <div className='banner__buttons'>
                <button className='banner__buttons play'>Play</button>
                <button className='banner__buttons'>My List</button>
            </div>
            <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className='banner__fadeBottom' />
    </div>
  )
}

export default Banner