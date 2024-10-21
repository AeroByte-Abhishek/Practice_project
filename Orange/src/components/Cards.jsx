import React, { useRef, useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

function Cards({ data, handleClick, index }) {
  const { image, name, artist, added, audio } = data;
  const audioRef = useRef(null); // Ref to control audio playback
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause status

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle between play and pause
    }
  };

  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md pb-8 flex relative gap-4 mt-10'>
      <div className="w-24 h-24 overflow-hidden rounded-md">
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
      <div className=''>
        <h3 className='text-xl leading-none mb-4 font-semibold'>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
        
        {/* Audio Element without controls */}
        <audio ref={audioRef} src={audio} />

        
        <button 
          onClick={togglePlay}
          className="px-2 font-bold py-1 rounded-md mt-4"
        >
          {isPlaying ? <div className='p-5 text-4xl'><FaPauseCircle /> </div> : <div className='p-5 text-4xl'><FaPlayCircle /></div>}
        </button>
        </div>

        {/* Add to Favourites Button */}
      <button 
        onClick={() => handleClick(index)} 
        className={`px-4 py-3 ${added === false ? "bg-orange-600" : "bg-teal-700"} absolute text-white text-xs rounded-full bottom-0 whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%]`}
      >
        {added === false ? "Add to Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Cards;
