import React from 'react'
import Row from '../Row/Row'
import requests from '../../utils/requests'

const RowList = () => {
  return (
    <>
        <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixoriginals} 
        isLargeRow={true} 
        />  
        <Row title = "TRENDING KNOW"
        fetchUrl={requests.fetchTrending}/>
        <Row title = "TOP RATED"
        fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title = "ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}/>
        <Row title = "COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}/>
        <Row title = "HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}/>
        <Row title = "ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}/>
        <Row title = "DOCUMENTARIES"        
        fetchUrl={requests.fetchDocumentaries}/>
        <Row title = "TV SHOWS"
        fetchUrl={requests.fetchTvShow}/>

    </>
  )
}

export default RowList