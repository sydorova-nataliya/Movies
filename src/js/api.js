import {renderMovies , renderMovieDetails, renderError, renderNoMovies,renderMoviesList } from './templates';
import { generateSearch, generateUrl} from "./utils";
import {ROOT} from "./constans";

export const getMovie = (getURL, title)=>{
    fetch(generateUrl(getURL))
    .then(res=>res.json())
    .then(data=>{
        if(data.success===false){
            ROOT.innerHTML=renderError(data);
        }else{
            ROOT.innerHTML += renderMovies(data.results, title);
        }   
    })
}

export const getMovieDetails = getURL=>{
    fetch(generateUrl(getURL))
    .then(res=>res.json())
    .then(data=>{
        if(data.success===false){
            ROOT.innerHTML=renderError(data);
        }else{
            ROOT.innerHTML = renderMovieDetails(data);
        }
    })
}

export const getSearch = (query)=>{
    fetch(generateSearch(query))
    .then(res=>res.json())
    .then(data=>{
        if(data.success===false){
            ROOT.innerHTML=renderError(data);
        }else if(data.results.length===0){
            ROOT.innerHTML=renderNoMovies();
        }else{
            ROOT.innerHTML = renderMoviesList(data.results, query);
        }
    })
}