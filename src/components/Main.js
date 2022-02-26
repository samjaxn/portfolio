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

//TITLES
import andrasTitle from '../content/andras/title.png';
import basketballTitle from '../content/basketball/title.png';
import bullyTitle from '../content/bully/title.png';
import hongShingTitle from '../content/hongShing/title.png';
import jordanAnimationTitle from '../content/jordanAnimation/title.png';
import jordanShootTitle from '../content/jordanShoot/title.png';
import jordanTransformationTitle from '../content/jordanTransform/title.png';
import knitShoeTitle from '../content/knitShoe/title.png';
import shoeLaundryTitle from '../content/shoeLaundry/title.png';
import soleDisplaceTitle from '../content/soleDisplace/title.png';

//ANDRAS


//BASKETBALL


//BULLY


//HONG SHING


//JORDAN ANIMATION


//JORDAN SHOOT


//JORDAN TRANSFORMATION


//KNIT SHOE
import knitFull from '../content/knitShoe/full.mp4';
import knitFullTest from '../content/knitShoe/fullTest.png';
import knitLaces from '../content/knitShoe/laces1.png';
import knitSide from '../content/knitShoe/side.png';
import knitTest from '../content/knitShoe/test1.png';
import knitTop1 from '../content/knitShoe/top1.png';
import knitTop2 from '../content/knitShoe/top2.png';

//SHOE LAUNDRY


//SOLE DISPLACEMENT


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
    img: knitShoeTitle,
    title: 'Knit Effect',
    url: 'knit-effect',
    info: [
      'testing',
      'this',
      '',
      'test again'
    ],
    content: [
      { type: 'link', source: 'https://player.vimeo.com/video/679228445?h=5774d8174f' },
      { type: 'video', source: knitFull },
      { type: 'image', source: knitTop2 },
      { type: 'image', source: knitSide },
      { type: 'image', source: knitLaces },
      { type: 'image', source: knitTest },
      { type: 'image', source: knitTop1 },
      { type: 'image', source: knitFullTest },
    ]
  },
  {
    img: soleDisplaceTitle,
    title: 'Sole Displacement',
    url: 'sole-displacement',
    info: [],
    content: [
      { type: 'link', source: 'https://www.youtube.com/embed/OAAU2x_rmWE' },
      { type: 'image', source: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' }
    ]
  },
  {
    img: shoeLaundryTitle,
    title: 'Shoe Laundry',
    url: 'shoe-laundry',
    info: [],
    content: []
  },
  {
    img: hongShingTitle,
    title: 'Hong Shing',
    url: 'hong-shing',
    info: [],
    content: []
  },
  {
    img: andrasTitle,
    title: 'Andras',
    url: 'andras',
    info: [],
    content: []
  },
  {
    img: jordanTransformationTitle,
    title: 'Jordan OG',
    url: 'jordan-og',
    info: [],
    content: []
  },
  {
    img: bullyTitle,
    title: 'Bully',
    url: 'bully',
    info: [],
    content: []
  },
  {
    img: jordanAnimationTitle,
    title: 'Jordan Waves',
    url: 'jordan-waves',
    info: [],
    content: []
  },
  {
    img: basketballTitle,
    title: 'Bounce',
    url: 'bounce',
    info: [],
    content: []
  },
  {
    img: jordanShootTitle,
    title: 'Shattered',
    url: 'shattered',
    info: [],
    content: []
  },
];