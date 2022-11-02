import {renderMovies , renderMovieDetails, renderError, renderNoMovies,renderMoviesList } from './templates';
import { generateSearch, generateUrl} from "./utils";
import {root} from "./constans";

export const getMovie = (getURL, title)=>{
    fetch(generateUrl(getURL))
    .then(res=>res.json())
    .then(data=>{
        if(data.success===false){
            root.innerHTML=renderError(data);
        }else{
            root.innerHTML += renderMovies(data.results, title);
        }
        
    })
}

export const getMovieDetails = getURL=>{
    fetch(generateUrl(getURL))
    .then(res=>res.json())
    .then(data=>{
        if(data.success===false){
            root.innerHTML=renderError(data);
        }else{
            document.getElementById('root').innerHTML = renderMovieDetails(data);
        }
    })
}

export const getSearch = (query)=>{
    fetch(generateSearch(query))
    .then(res=>res.json())
    .then(data=>{
        if(data.success===false){
            root.innerHTML=renderError(data);
        }else if(data.results.length===0){
            root.innerHTML=renderNoMovies();
        }else{
            root.innerHTML = renderMoviesList(data.results, query);
        }
        
    })
}