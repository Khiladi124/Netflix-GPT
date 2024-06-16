import MovieCard from "./MovieCard";
const MovieList = ({title,movies}) => {
   
console.log(movies);
return (
    <div className="px-5 w-full">
      <h1 className="py-4 text-white text-4xl">{title}</h1>
      <div className="flex space-x-4 py-2 overflow-x-auto h-80 w-full scroll-smooth  hide-scrollbar ">
        {movies && movies.map((movie, index) => (
          <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;