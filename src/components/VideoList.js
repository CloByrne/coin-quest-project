// components/VideoList.js
import React from 'react';
import CarouselComponent from './CarouselComponent';

export const videos = [
  {
    id: 1,
    src: 'https://www.youtube.com/watch?v=v-mlEQ7KW5Q&ab_channel=LearningMole',
    alt: 'Home Workout',
    name: 'Workout at home with our easy exercises',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/watch?v=ppnhNKRwKHg&ab_channel=SesameWorkshop',
    alt: 'Healthy eating',
    name: 'Eating healthy can help you stay fit',
  },
  // Add more videos as needed
];

const VideoList = () => {
  return (
    <div className="App">
      <CarouselComponent videos={videos} />
    </div>
  );
};

export default VideoList;
