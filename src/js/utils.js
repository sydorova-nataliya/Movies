import { API_KEY, http, httpIMG, root} from "./constans";
import {renderMovies} from './templates';


export const generateUrl = path =>`${http}${path}?api_key=${API_KEY}`;
export const calculatePopularity = popularity => Math.round(popularity *10)+'%';
export const convertDate = date => {
    let [a,b,c, d] = new Date(date).toString().split(' ');
    return `${b} ${c}, ${d}`
}
export const generateImageUrl = poster_path => httpIMG+poster_path;

export const fetchMovie = (getURL, title)=>{
fetch(generateUrl(getURL))
.then(res=>res.json())
.then(data=>{
    root.innerHTML += renderMovies(data.results, title);
})
}