import { getMovie, getMovieDetails } from "./api";

checkURL();

window.addEventListener('hashchange', () => {
    checkURL();
  });

function checkURL(){
    const [hash, movieId] = document.location.hash.split('=');
    if(hash==='#movieId'){
        getMovieDetails(movieId);
    }else{
        document.getElementById('root').innerHTML='';
        getMovie('popular', 'Popular' );
        getMovie('top_rated','Top Rated' );
        getMovie('upcoming','Upcomming' );
        
    }
  }