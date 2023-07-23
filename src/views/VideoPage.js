import React from 'react';
import '../styles/Video.css';

const videos = [
  {
    number: '0',
    title: 'The History About Money',
    url: 'https://www.youtube.com/embed/geLkfMbPtNc',
  },
  {
    number: '1',
    title: 'How Do People Get Money?',
    url: 'https://www.youtube.com/embed/ppnhNKRwKHg',
  },
  {
    number: '2',
    title: "Money: It's a sport?",
    url: 'https://www.youtube.com/embed/7-eUQ00u3HM',
  },
  {
    number: '3',
    title: 'Savings Goals',
    url: 'https://www.youtube.com/embed/v-mlEQ7KW5Q',
  },
  {
    number: '4',
    title: 'Saving Money',
    url: 'https://www.youtube.com/embed/XYRvsMZF-zs',
  },
  {
    number: '5',
    title: 'Saving and Spending Money',
    url: 'https://www.youtube.com/embed/YI9OzLCtTu0',
  },
  {
    number: '6',
    title: 'Smart Buying Habits',
    url: 'https://www.youtube.com/embed/8vlJw0ary5Y',
  },
  {
    number: '7',
    title: 'The Right Money Habits',
    url: 'https://www.youtube.com/embed/RTZMfBBr7xs',
  },
  {
    number: '8',
    title: 'Roles of a Bank',
    url: 'https://www.youtube.com/embed/VVWDXihmGlQ',
  },
  {
    number: '9',
    title: 'Types of Bank Accounts',
    url: 'https://www.youtube.com/embed/SedDd73UD0o',
  },
];

const VideoPage = () => {
  return (
    <div className="video-grid">
      <h1>Videos</h1>

      <div className="grid-1">
      <div class="container-with-h2">
        <h2>Money</h2>
        </div>
        <div className="video-container">
          {videos.slice(0, 3).map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <iframe
                title={video.title}
                width="560"
                height="315"
                src={video.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-2">
      <div class="container-with-h2">
        <h2>Savings</h2>
        </div>
        <div className="video-container">
          {videos.slice(3, 6).map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <iframe
                title={video.title}
                width="560"
                height="315"
                src={video.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-3">
      <div class="container-with-h2">
        <h2>Money Habits</h2>
        </div>
        <div className="video-container">
          {videos.slice(6, 8).map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <iframe
                title={video.title}
                width="560"
                height="315"
                src={video.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-4">
        <h2>The Role of the Banks</h2>
        <div className="video-container">
          {videos.slice(8, 10).map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <iframe
                title={video.title}
                width="560"
                height="315"
                src={video.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
