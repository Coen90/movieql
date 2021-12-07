import fetch from "node-fetch";

let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Avengrs - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "Nicolas111",
    age: 19,
    gender: "female",
  },
  {
    id: "2",
    name: "Nicolas222",
    age: 20,
    gender: "female",
  },
  {
    id: "3",
    name: "Nicolas333",
    age: 21,
    gender: "female",
  },
  {
    id: "4",
    name: "Nicolas444",
    age: 22,
    gender: "female",
  },
];

export const getByIdPerson = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMoviesAPI = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
