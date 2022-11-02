import { getMovie, getMovieDetails, getSearch } from "./api";
import { generateSearch } from "./utils";
const submit = document.getElementById('submit');
const text = document.getElementById('text');
checkURL();

window.addEventListener('hashchange', () => {
    checkURL();
  });

submit.addEventListener('click', function(){
  document.location.hash=`search=${text.value}`; 
  text.value='';
})

function checkURL(){
    const [hash, movieId] = document.location.hash.split('=');
    if(hash==='#movieId'){
        getMovieDetails(movieId);
    }else if(hash==='#search'){
      getSearch(movieId);
    }else{
        document.getElementById('root').innerHTML='';
        getMovie('popular', 'Popular' );
        getMovie('top_rated','Top Rated' );
        getMovie('upcoming','Upcomming' );
        
    }
  }