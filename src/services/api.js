import axios from "axios";

const api = axios.create({
  baseURL: "https://scenestack-api-production.up.railway.app/api/scenestack"
})

export default api;

//list 
export const searchMovies = (title, page = 1) => 
    api.get("/movies", { params: { title, page}});

export const searchSeries = (title, page = 1) =>
    api.get("/series", { params: { title, page}});

//details
export const getMovieByTitle = (title) =>
    api.get("/search/movie", { params: { title }});

export const getSeriesByTitle = (title) =>
    api.get("/search/series", { params: { title }});

//generic
export const genericSearch = (title, type, page = 1) =>
    api.get("/search", { params: { title, type, page }});

export const genericDetails = (title, type) =>
    api.get("/details", { params: { title, type }});

//id
export const getMovieById = (id) =>
  api.get(`/movie/id/${id}`);

export const getSerieById = (id) =>
    api.get(`/serie/id/${id}`);