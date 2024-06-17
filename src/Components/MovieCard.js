import { IMG_URL } from "../utils/contants";


const MovieCard = ({title,posterPath}) => {

const image=IMG_URL+posterPath;

return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden h-full mx-[0.5px] sm:mx-1 min-w-[135px] sm:min-w-[200px] relative">
      <div className="relative group">
        <img
          className="w-full h-full object-cover hover:opacity-50"
          alt={title}
          src={image}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <h1 className="text-white font-bold text-2xl text-center">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;