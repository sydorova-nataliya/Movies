import {renderMovies , renderMovieDetails, renderError} from './templates';
import { generateUrl} from "./utils";

export const getMovie = (getURL, title)=>{
    fetch(generateUrl(getURL))
    .then(res=>res.json())
    .then(data=>{
        const root =  document.getElementById('root');
        console.log(data.success);
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
        const root =  document.getElementById('root');
        if(data.success===false){
            root.innerHTML=renderError(data);
        }else{
            document.getElementById('root').innerHTML = renderMovieDetails(data);
            console.log(data);
        }
    })
}