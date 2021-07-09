// graphql 파일의 query를 실행할 수 있게 한다
import {getMovies ,getById, deleteMovie, addMovie}from "./db"

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (obj, { id }) => getById(id),
  },
  Mutation: {
    addMovie:(obj,{name,score})=>addMovie(name,score),
    deleteMovie: (obj, { id }) => deleteMovie(id),
  }
}

export default resolvers