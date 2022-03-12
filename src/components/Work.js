import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import Anime from 'react-anime';
import '../css/Work.css';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const Work = (props) => {
  let navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);
  const [hover, setHover] = useState(-1);
  const [hovered, setHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });
  const colSize = window.innerWidth > 1500 ? 3 : window.innerWidth < 841 ? 1 : 2;

  useEffect(() => {
    console.log(dimensions.width, dimensions.height);
    console.log(isMobile);
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  }, [dimensions.width, dimensions.height]);

  const mouseEnter = (index) => {
    setHover(index);
    setHovered(true);
  }

  const mouseLeave = () => {
    setHover(-1);
    setHovered(false);
  }

  const CustomizedImageListItemBarMobile = styled(ImageListItemBar)`
    .css-dasnyc-MuiImageListItemBar-title {
      font-size: ${10/colSize}vw;
      line-height: 125%;
    }
  `;

  const CustomizedImageListItemBarDesktop = styled(ImageListItemBar)`
    .css-dasnyc-MuiImageListItemBar-title {
      font-size: ${6/colSize}vw;
      line-height: 125%;
    }
  `;

  return (
    <ImageList cols={colSize} gap={10}>
      <Anime
				easing="easeInOutExpo"
				direction="normal"
				opacity={[0, 1]}
				delay={(el, index) => 200 + index * 100}
			>
      {props.itemData.map((item, index) => (
        <ImageListItem
        key={index}
        className='pointer'
        onClick={e => {
          console.log(item.title);
          navigate(item.url);
        }}
        onMouseEnter={() => mouseEnter(index)}
        onMouseLeave={() => mouseLeave()}
        >
          <img
            onLoad={() => {
              setIsLoaded(true);
            }}
            className='imageLoad'
            style={{ opacity: isLoaded ? 1 : 0 }}
            src={`${item.img}?w=426&h=240&fit=crop&auto=format`}
            srcSet={`${item.img}?w=426&h=240&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            // loading="lazy"
          />
          {/* {isMobile ? 
          <CustomizedImageListItemBarMobile
            sx={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)',
                'textAlign': 'center',
            }}
            title={item.title}
            position="bottom"
          />
          : null} */}
          <div style={{transition: 'opacity 0.25s', opacity: hover===index ? 1 : 0}}>
            <CustomizedImageListItemBarDesktop
              sx={{
                background: 'rgba(0,0,0,0.4) 65%',
                'textAlign': 'center',
                height: '100%',
              }}
              title={item.title.toUpperCase()}
            />
          </div>
        </ImageListItem>
      ))}
      </Anime>
    </ImageList>
  );
};

export default Work;