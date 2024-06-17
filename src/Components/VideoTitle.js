const VideoTitle=({title,overview})=>{
   return(
    <div className="w-screen aspect-video  pt-[37px] sm:pt-[25%] lg:pt-[7%] px-4 md:px-24 absolute text-white bg-gradient-to-r from-black">
    <h1 className="text-2xl sm:text-4xl md:text-6xl  md:my-5 lg:my-10  font-bold">{title}</h1>
    <p className="hidden lg:inline-block py-6 text-lg w-2/5">{overview}</p>
    <div className="my-4 md:m-0">
      <button className=" bg-white text-black max-[620]:mb-20 py-1 sm:py-2 lg:py-4 px-3 sm:px-10 lg:px-12 text-xl  rounded-lg hover:bg-opacity-80">
        ▶️ Play
      </button>
      <button className="hidden lg:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
        More Info
      </button>
    </div>
  </div>
   );
};
export default VideoTitle;