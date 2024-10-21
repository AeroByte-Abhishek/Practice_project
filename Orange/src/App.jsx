import React, { useState } from 'react';
import Cards from './components/Cards';
import NavBar from './components/NavBar';

// Import audio file
import livingInTheCity from "./assets/audio/Living In The City-(320Kbps.Com.In).mp3";

function App() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1729404427328-e93bf1203712?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alone",
      artist: "Abhishek",
      added: false,
      audio: livingInTheCity // Use the imported audio file here
    },
    {
      image: "https://images.unsplash.com/photo-1445575722865-82118e5084ff?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mountain Pass",
      artist: "Abhishek",
      added: false,
      audio: "path_to_audio_file_1.mp3" // Update this if you have a real file path
    },
    {
      image: "https://images.unsplash.com/photo-1729008920276-e9e61d13c2db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Safar",
      artist: "Abhishek",
      added: false,
      audio: "path_to_audio_file_1.mp3" // Update this if you have a real file path
    },
    {
      image: "https://images.unsplash.com/photo-1593285942976-70dbd769a590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Life is green",
      artist: "Abhishek",
      added: false,
      audio: "path_to_audio_file_1.mp3" // Update this if you have a real file path
    },
    
    
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <div className='w-full h-screen bg-zinc-300'>
      <NavBar data={songData} />

      <div className="px-20 flex gap-10 mt-32 flex-wrap">
        {songData.map((obj, index) => (
          <Cards data={obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
