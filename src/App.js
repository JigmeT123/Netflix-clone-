import React from 'react';
import Row from './components/row/Row';
import request from './requests/request';
import Banner from './components/banner/Banner';
import styles from './app.module.css';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className={styles.app}>
      {/* NavBar */}
      <NavBar />
      {/* Banner */}
      <Banner />
     
      <Row title="TOP TRENDINGS" fetchURL={request.fetchTrending}/>
      <Row title="TOP RATED" fetchURL={request.fetchTopRated}/>
      <Row title="ACTIONS MOVIES" fetchURL={request.fetchActionMovies}/>
      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLarge/>
      <Row title="ROMANCE" fetchURL={request.fetchRomanceMovies}/>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
      <Row title="COMDEDY MOVIES" fetchURL={request.fetchComedyMovies}/>
      <Row title="DOCUMENTARIES" fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
