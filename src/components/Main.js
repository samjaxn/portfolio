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
import jordanAnimation1 from '../content/jordanAnimation/blue1.png';
import jordanAnimation2 from '../content/jordanAnimation/blue2.png';
import jordanAnimation3 from '../content/jordanAnimation/blue3.png';
import jordanAnimation4 from '../content/jordanAnimation/blue4.png';
import jordanAnimation5 from '../content/jordanAnimation/blue5.png';
import jordanAnimation6 from '../content/jordanAnimation/blue6.png';
import jordanAnimation7 from '../content/jordanAnimation/blue7.png';

//JORDAN SHOOT
import jordanShoot1 from '../content/jordanShoot/orange2.png';
import jordanShoot2 from '../content/jordanShoot/orange3.png';
import jordanShoot3 from '../content/jordanShoot/orange4.png';
import jordanShoot4 from '../content/jordanShoot/orange5.png';
import jordanShootTest from '../content/jordanShoot/orangeTest.png';
import jordanShootRed from '../content/jordanShoot/red.png';

//JORDAN TRANSFORMATION
import jordanTransform1 from '../content/jordanTransform/jordan1.png';
import jordanTransform2 from '../content/jordanTransform/jordan2.png';
import jordanTransform3 from '../content/jordanTransform/jordan3.png';

//KNIT SHOE
import knitFull from '../content/knitShoe/full.mp4';
import knitFullTest from '../content/knitShoe/fullTest.png';
import knitLaces from '../content/knitShoe/laces1.png';
import knitSide from '../content/knitShoe/side.png';
import knitTest from '../content/knitShoe/test1.png';
import knitTop1 from '../content/knitShoe/top1.png';
import knitTop2 from '../content/knitShoe/top2.png';

//SHOE LAUNDRY
import shoeLaundryBottleTest from '../content/shoeLaundry/bottleTest.png';
import shoeLaundryBox1 from '../content/shoeLaundry/box1.png';
import shoeLaundryBox2 from '../content/shoeLaundry/box2.png';
import shoeLaundryBox3 from '../content/shoeLaundry/box3.png';
import shoeLaundryBrush from '../content/shoeLaundry/brush.png';
import shoeLaundryCloth from '../content/shoeLaundry/cloth.png';
import shoeLaundryFoam1 from '../content/shoeLaundry/foam1.png';
import shoeLaundryFoam2 from '../content/shoeLaundry/foam2.png';
import shoeLaundryFoam3 from '../content/shoeLaundry/foam3.png';
import shoeLaundryFull1 from '../content/shoeLaundry/full1.png';
import shoeLaundryFull2 from '../content/shoeLaundry/full2.png';

//SOLE DISPLACEMENT
import soleDisplace1 from '../content/soleDisplace/sole1.png';
import soleDisplace2 from '../content/soleDisplace/sole2.png';
import soleDisplace3 from '../content/soleDisplace/sole3.png';
import soleDisplace4 from '../content/soleDisplace/sole4.png';
import soleDisplace5 from '../content/soleDisplace/sole5.png';
import soleDisplace6 from '../content/soleDisplace/sole6.png';

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
      { type: 'link', source: 'https://vimeo.com/679224617' },
      { type: 'image', source: soleDisplace1 },
      { type: 'image', source: soleDisplace2 },
      { type: 'image', source: soleDisplace3 },
      { type: 'image', source: soleDisplace4 },
      { type: 'image', source: soleDisplace5 },
      { type: 'image', source: soleDisplace6 },
    ]
  },
  {
    img: shoeLaundryTitle,
    title: 'Shoe Laundry',
    url: 'shoe-laundry',
    info: [],
    content: [
      { type: 'link', source: 'https://vimeo.com/678840645' },
      { type: 'image', source: shoeLaundryFull2 },
      { type: 'image', source: shoeLaundryBrush },
      { type: 'image', source: shoeLaundryCloth },
      { type: 'image', source: shoeLaundryBox1 },
      { type: 'image', source: shoeLaundryBox2 },
      { type: 'image', source: shoeLaundryBox3 },
      { type: 'image', source: shoeLaundryBottleTest },
      { type: 'image', source: shoeLaundryFoam1 },
      { type: 'image', source: shoeLaundryFoam2 },
      { type: 'image', source: shoeLaundryFoam3 },
      { type: 'image', source: shoeLaundryFull1 },
    ]
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
    content: [
      { type: 'link', source: 'https://vimeo.com/678838793' },
      { type: 'image', source: jordanTransform1 },
      { type: 'image', source: jordanTransform2 },
      { type: 'image', source: jordanTransform3 },
    ]
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
    content: [
      { type: 'link', source: 'https://vimeo.com/464076439' },
      { type: 'image', source: jordanAnimation1 },
      { type: 'image', source: jordanAnimation2 },
      { type: 'image', source: jordanAnimationTitle },
      { type: 'image', source: jordanAnimation5 },
      { type: 'image', source: jordanAnimation6 },
      { type: 'image', source: jordanAnimation7 },
      { type: 'image', source: jordanAnimation3 },
      { type: 'image', source: jordanAnimation4 },
    ]
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
    content: [
      { type: 'image', source: jordanShootTitle },
      { type: 'image', source: jordanShoot1 },
      { type: 'image', source: jordanShoot2 },
      { type: 'image', source: jordanShoot3 },
      { type: 'image', source: jordanShoot4 },
      { type: 'image', source: jordanShootTest },
      { type: 'image', source: jordanShootRed },
    ]
  },
];