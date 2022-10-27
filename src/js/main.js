import { generatUrl } from "./utils";

const getPopular = '/movie/popular';
const getTopRated= '/movie/top_rated';
const getUpcoming= '/movie/upcoming';

let popularDiv= document.querySelector('.popular__section');
let topRatedDiv= document.querySelector('.top-rated__section');
let upcomingDiv= document.querySelector('.upcoming__section');

function createElement(tagName, textContent, classNames, parent){
    let element = document.createElement(tagName);
    element.textContent = textContent;

    classNames.forEach(function(className){
      element.classList.add(className);
    })
    parent.append(element);
  }
   const parseIsoDatetime= date =>{
    let tmp = new Date(date).toString().split(' ');
    return `${tmp[1]} ${tmp[2]}, ${tmp[3]}`
}

function renderMovie(data, container){
    data.results.map(({original_title, poster_path, release_date, popularity})=>{
        //console.log(popularity);
        let containerMovie = document.createElement('div');
        containerMovie.classList.add('movie');
        createElement('img', '', ['movie__photo','photo'], containerMovie);
        let imgMovie= containerMovie.querySelector('.movie__photo');
        imgMovie.src=` https://image.tmdb.org/t/p/original${poster_path}`;

  
        createElement('a', original_title, ['movie__title'], containerMovie);
        createElement('span', Math.round(popularity), ['movie__popularity'], containerMovie);
        createElement('p', parseIsoDatetime(release_date), ['movie__date'], containerMovie);

        container.append(containerMovie);
    })
}

fetch(generatUrl(getPopular))
.then(res=>res.json())
.then(data=>{
    renderMovie(data, popularDiv);
})
fetch(generatUrl(getTopRated))
.then(res=>res.json())
.then(data=>{
    renderMovie(data, topRatedDiv);
})
fetch(generatUrl(getUpcoming))
.then(res=>res.json())
.then(data=>{
    renderMovie(data, upcomingDiv);
})