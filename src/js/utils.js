import { API_KEY, http } from "./constans";
export const generatUrl = path =>`${http}${path}?api_key=${API_KEY}`;
export const calculatePopularity = popularity => Math.round(popularity / 100)+'%';
export const parseIsoDatetime= date =>{
    let tmp = new Date(date).toString().split(' ');
    return `${tmp[1]} ${tmp[2]}, ${tmp[3]}`
}