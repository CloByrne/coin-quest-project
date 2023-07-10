import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = ({ videos }) => {
  return (
    <div className="container3">
      <Carousel>
        {videos.map((video) => (
          <Carousel.Item key={video.id}>
            <iframe
              title={video.alt}
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${getVideoId(video.src)}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <Carousel.Caption>
              <h3>{video.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

// Helper function to extract the YouTube video ID
function getVideoId(url) {
  const videoId = url.match(/(?:[?v=]|\/embed\/|\.be\/)([^&\n?#]+)/);
  return videoId && videoId[1];
}

export default CarouselComponent;