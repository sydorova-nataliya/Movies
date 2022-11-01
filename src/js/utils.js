import { API_KEY, API_URL, IMG_URL} from "./constans";

export const generateUrl = path =>`${API_URL}${path}?api_key=${API_KEY}`;
export const calculatePopularity = popularity => Math.round(popularity *10)+'%';
export const convertDate = date => {
    let [_,b,c, d] = new Date(date).toString().split(' ');
    return `${b} ${c}, ${d}`
}
export const generateImageUrl = poster_path => IMG_URL+poster_path;

