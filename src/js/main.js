export const {API_KEY} = process.env;

const getPopular = '/movie/popular';
const getTopRated= '/movie/top_rated';
const getUpcoming= '/movie/upcoming';

let popularDiv= document.querySelector('.popular');
let topRatedDiv= document.querySelector('.top-rated');
let upcomingDiv= document.querySelector('.upcoming');

function fetchURL(get, API_KEY){
    const http = 'https://api.themoviedb.org/3';
    return `${http}${get}?api_key=${API_KEY}`
}
function createElement(tagName, textContent, classNames, parent){
    let element = document.createElement(tagName);
    element.textContent = textContent;

    classNames.forEach(function(className){
      element.classList.add(className);
    })
    parent.append(element);
  }

function renderMovie(data, container){
    data.results.map(({original_title, poster_path})=>{
        
        let containerMovie = document.createElement('div');
        containerMovie.classList.add('containerMovie');

        createElement('img', '', ['movie-photo'], containerMovie);
        let imgMovie= containerMovie.querySelector('.movie-photo');
        imgMovie.src=`https://image.tmdb.org/t/p/w200${poster_path}`;

        createElement('h1', original_title, ['title'], containerMovie);

        container.append(containerMovie);
    })
}
fetch(fetchURL(getPopular,API_KEY))
.then(res=>res.json())
.then(data=>{
    renderMovie(data, popularDiv);
})