export const {API_KEY} = process.env;
const getPopular = '/movie/popular';
const getTopRated= '/movie/top_rated';
const getUpcoming= '/movie/upcoming';

function fetchURL(get, API_KEY){
    const http = 'https://api.themoviedb.org/3';
    return `${http}${get}?api_key=${API_KEY}`
}

fetch(fetchURL(getPopular,API_KEY))
.then(res=>res.json())
.then(data=>{
    console.log(data);
})