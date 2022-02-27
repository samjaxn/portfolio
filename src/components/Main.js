import React, { useEffect } from 'react';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Details from './Details';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation 
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
import andrasMainVideo from '../content/andras/main.mp4';
import andrasWavesVideo from '../content/andras/waves.mp4';
import andrasParticles from '../content/andras/loading.mp4';
import andrasMain1 from '../content/andras/main1.png';
import andrasMain2 from '../content/andras/main2.png';
import andrasMain3 from '../content/andras/main3.png';
import andrasWaves1 from '../content/andras/waves1.png';

//BASKETBALL
import ball1 from '../content/basketball/ball1.png';
import ball2 from '../content/basketball/ball2.png';

//BULLY
import bullyAnimation from '../content/bully/rockAnimationCompress.mp4';
import bullyGlass1 from '../content/bully/glass1.png';
import bullyGlass2 from '../content/bully/glass2.png';
import bullyRock1 from '../content/bully/rock1.png';
import bullyRock2 from '../content/bully/rock2.png';
import bullyRockAlpha1 from '../content/bully/rockAlpha1.png';
import bullyRockAlpha2 from '../content/bully/rockAlpha2.png';
import bullyRockAlpha3 from '../content/bully/rockAlpha3.png';
import bullySpheres1 from '../content/bully/spheres1.png';

//HONG SHING
import hongShingBall from '../content/hongShing/ball1.png';
import hongShingBallTest from '../content/hongShing/ballTest.png';
import hongShingCan from '../content/hongShing/can.png';
import hongShingCards from '../content/hongShing/cards.png';
import hongShingDragon from '../content/hongShing/dragon.png';
import hongShingJersey from '../content/hongShing/jersey.png';
import hongShingSkateboard from '../content/hongShing/skateboard.png';

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    content: [
      { type: 'link', source: 'https://vimeo.com/679192898' },
      { type: 'image', source: hongShingDragon },
      { type: 'image', source: hongShingBall },
      { type: 'image', source: hongShingJersey },
      { type: 'image', source: hongShingSkateboard },
      { type: 'image', source: hongShingCan },
      { type: 'image', source: hongShingBallTest },
      { type: 'image', source: hongShingCards },
    ]
  },
  {
    img: andrasTitle,
    title: 'Andras',
    url: 'andras',
    info: [],
    content: [
      { type: 'video', source: andrasMainVideo },
      { type: 'video', source: andrasWavesVideo },
      { type: 'video', source: andrasParticles },
      { type: 'image', source: andrasMain1 },
      { type: 'image', source: andrasMain2 },
      { type: 'image', source: andrasWaves1 },
      { type: 'image', source: andrasMain3 },
    ]
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
    content: [
      { type: 'video', source: bullyAnimation },
      { type: 'image', source: bullyTitle },
      { type: 'image', source: bullyRock2 },
      { type: 'image', source: bullyGlass2 },
      { type: 'image', source: bullyGlass1 },
      { type: 'image', source: bullySpheres1 },
      { type: 'image', source: bullyRock1 },
      { type: 'image', source: bullyRockAlpha2 },
      { type: 'image', source: bullyRockAlpha3 },
    ]
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
    content: [
      { type: 'link', source: 'https://vimeo.com/679222708'},
      { type: 'image', source: basketballTitle },
      { type: 'image', source: ball1 },
      { type: 'image', source: ball2 }
    ]
  },
  {
    img: jordanShootTitle,
    title: 'Shattered',
    url: 'shattered',
    info: [],
    content: []
  },
];