import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <h1>PESFlix</h1>
      <Banner/>
      <Row 
      title={'NETFLIX ORIGINALS'} 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title={'Trending Now'} fetchUrl={requests.fetchTrending}/>
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated}/>
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies}/>
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies}/>
      <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies}/>
      <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
