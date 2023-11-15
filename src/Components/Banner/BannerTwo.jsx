import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BannerTwo = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Replace 'YOUR_CHANNEL_ID' and 'YOUR_YOUTUBE_API_KEY' with your actual values

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${import.meta.env.VITE_REACT_APP_YOUTUBE_CHANNEL_ID}&maxResults=5&order=date&type=video&key=${import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY}`
        );

        setVideos(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-4/5 pb-10 mx-auto text-white'>
      <h2 className='py-4 text-md font-semibold'>Most Recent</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {videos.map((video) => (
            <span key={video.id.videoId}>
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                width={400}
                height={400}
                allowFullScreen
                className='mx-auto'
              ></iframe>
              <p className='uppercase font-semibold px-1 break-words py-2'>
                {video.snippet.title}
              </p>
            </span>
          ))}
        </div>
      )}

      <div className='w-1/2 pt-10 mx-auto'>
        <h2 className='text-4xl text-center font-bold antialiased'>
          The thief comes only to steal and kill and destroy; I have come that
          they may have life, and have it to the full.
        </h2>
        <p className='text-sm text-center pt-4'>John 10:10</p>
      </div>
    </div>
  );
};

export default BannerTwo;
