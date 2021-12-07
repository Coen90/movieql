import {
  people,
  getByIdPerson,
  getMovies,
  getById,
  addMovie,
  deleteMovie,
  getMoviesAPI,
} from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getByIdPerson(id),
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
    movieAPI: (_, { rating, limit }) => getMoviesAPI(limit, rating),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
