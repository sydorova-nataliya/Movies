import { API_KEY, http } from "./constans";
export const generatUrl = path =>`${http}${path}?api_key=${API_KEY}`