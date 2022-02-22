import React from 'react';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Details from './Details';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Work itemData={itemData} />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {itemData.map((item, index) => (
        <Route key={`${index}`} path={`${item.url}`} element={<Details item={item} />} />
      ))}
    </Routes>
  );
};

export default Main;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    url: 'breakfast',
    info: [
      'testing',
      'this'
    ],
    content: [
      { type: 'video', source: 'https://player.vimeo.com/video/679228445?h=5774d8174f' },
      { type: 'image', source: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' },
      { type: 'image', source: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' },
      { type: 'image', source: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' },
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    url: 'burger',
    info: [],
    content: [
      { type: 'video', source: 'https://www.youtube.com/embed/OAAU2x_rmWE' },
      { type: 'image', source: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' }
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    url: 'camera',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    url: 'coffee',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    url: 'hats',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    url: 'honey',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    url: 'basketball',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    url: 'fern',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    url: 'mushrooms',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    url: 'tomato-basil',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    url: 'sea-star',
    info: [],
    content: []
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    url: 'bike',
    info: [],
    content: []
  },
];

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     url: 'breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     url: 'burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     url: 'camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     url: 'coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     url: 'hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     url: 'honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     url: 'basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     url: 'fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     url: 'mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     url: 'tomato-basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     url: 'sea-star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     url: 'bike',
//   },
// ];