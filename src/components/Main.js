import React, { useEffect } from 'react';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Details from './Details';
import Reel from './Reel';
import {
  BrowserRouter as Router,
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
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="reel" element={<Reel />} />
      {itemData.map((item, index) => (
        <Route key={`${index}`} path={`${item.url}`} element={<Details item={item} />} />
      ))}
      <Route path="*" element={<Work itemData={itemData} />} />
    </Routes>
  );
};

export default Main;

const itemData = [
  {
    img: knitShoeTitle,
    title: 'Pegasus Knit Exploration',
    url: 'knit-exploration',
    info: [
      // `For the longest time I've wanted to create a knitting effect on an object that looked like the object was created from nothing. After learning Houdini and playing around with the software I came up with this.`,
      // `This personal project is the result of a lot of learning and experimenting and is something I am proud of.`,
      `An experiment in materiality, seeking to explore forms that appear out of thin air in abstract ways.`,
      `Tools used: Houdini, Cinema 4D, Redshift`
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
    img: shoeLaundryTitle,
    title: 'Shoe Laundry',
    url: 'shoe-laundry',
    info: [
      `Had the pleasure of working with Shoe Laundry to create an animation for their shoe cleaning box set.`,
      // `The aim was to create a campaign that centered around the product and what you would get if you purchased a box of their plant-based sustainable shoe cleaning kit.`,
      `The aim was to create a campaign that centered around their graphic identity and highlighted the clean look of their plant-based sustainable shoe cleaning kit.`,
      `Tools used: Cinema 4D, Redshift`
    ],
    content: [
      { type: 'link', source: 'https://vimeo.com/678840645' },
      { type: 'image', source: shoeLaundryFull2 },
      { type: 'image', source: shoeLaundryBrush },
      { type: 'image', source: shoeLaundryCloth },
      { type: 'image', source: shoeLaundryTitle },
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
    info: [
      `Hong Shing approached us with the idea of promoting their 2021 Lunar New Year product launch. The aim was to feature the themed products, pairing them with traditional imagery associated with the Lunar New Year.`,
      `Using the dragon as the anchorpoint for storytelling, each swipe through the camera's path switches the object, allowing each product to be showcased in a seamless and dynamic way.`,
      `Tools used: Cinema 4D, Redshift, After Effects`
    ],
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
    info: [
      `With the launch of their new site, Andras envisioned their logo taking on different forms and textures.`,
      `Utilizing an abstract approach, the aim was to create a series of animations that aligned with Andras' bold, cinematic and unpredictable identity.`,
      `Tools used: Cinema 4D and Redshift`
    ],
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
    img: soleDisplaceTitle,
    title: 'Sole Displacement',
    url: 'sole-displacement',
    info: [
      `Was working on some R&D for a cool sole transition effect. Created a radial noise in After Effects that I used to drive the animation and the lighting, texturing and displacement were all done with Redshift.`,
      `Tools used: Cinema 4D, Substance, Redshift and After Effects`
    ],
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
    img: jordanTransformationTitle,
    title: 'Jordan OG',
    url: 'jordan-og',
    info: [
      `Small R&D I was testing out for the formation of a Jordan shoe. I liked it so much that I decided to texture and light the scene as well as make a loop from it.`,
      `Tools used: Cinema 4D, Substance, and Redshift`
    ],
    content: [
      { type: 'link', source: 'https://vimeo.com/678838793' },
      { type: 'image', source: jordanTransform1 },
      { type: 'image', source: jordanTransform2 },
      { type: 'image', source: jordanTransform3 },
    ]
  },
  {
    img: bullyTitle,
    title: 'Bully x Hennessy',
    url: 'break-barriers',
    info: [
      `Had the opportunity to create a responsive animation for Bully x Hennessy website. The aim was to encapsulate the feeling of breaking barriers, capturing the feeling of empowerment while possessing an ethereal quality.`,
      `You can check out the full page and animation on the page at: www.breakbarriers.net`,
      `Tools used: Cinema 4D and Redshift`
    ],
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
    info: [
      `A personal project that I wanted to make was this animation that focused on the Jordan shoe and was completely done by me. From the initial planning and ideation stage, all the way to the rendering and final production steps was done by me.`,
      `This was the first animation that felt like it was something bigger than just a 10 second loop. Doing this taught me a lot and gave me the confidence to continue working on my craft.`,
      `Tools used: Cinema 4D, Substance, Redshift and After Effects`
    ],
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
    info: [
      `Created this animation to test out a cage deform method within Cinema 4D. Works really well when trying to do soft body simulations on a very dense mesh, such as this basketball.`,
      `Tools used: Cinema 4D and Redshift`
    ],
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
    info: [
      `While learning substance I wanted to put out a result that showed off the realism and high quality that it offered. All textures were made within Substance and lighting and rendering were done in Redshift.`,
      `I particularly love the shoe laces and lip tag. Was really happy with how this turned out.`,
      `Tools used: Cinema 4D, Substance and Redshift`
    ],
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