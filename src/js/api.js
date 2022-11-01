import {renderMovies} from './templates';
import { generateUrl} from "./utils";

export const fetchMovie = (getURL, title)=>{
    fetch(generateUrl(getURL))
    .then(res=>res.json())
    .then(data=>{
        document.querySelector('.root').innerHTML += renderMovies(data.results, title);
    })
}