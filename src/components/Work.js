import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
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

  const [hover, setHover] = useState(-1);
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });
  const colSize = dimensions.width < 840 ? 1 : (Math.floor(dimensions.width/420));

  useEffect(() => {
    console.log(dimensions.width, dimensions.height);
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
  });

  const CustomizedImageListItemBarMobile = styled(ImageListItemBar)`
    .css-dasnyc-MuiImageListItemBar-title {
      font-size: ${10/colSize}vw;
      line-height: 125%;
    }
  `;

  const CustomizedImageListItemBarDesktop = styled(ImageListItemBar)`
    .css-dasnyc-MuiImageListItemBar-title {
      font-size: ${10/colSize}vw;
      line-height: 125%;
    }
  `;

  return (
    <ImageList cols={colSize}>
      {props.itemData.map((item, index) => (
        <ImageListItem
        key={index}
        onClick={e => {
          console.log(item.title);
          navigate(item.url);
        }}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(-1)}
        >
          <img
            src={`${item.img}?w=426&h=240&fit=crop&auto=format`}
            srcSet={`${item.img}?w=426&h=240&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          {isMobile ? 
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
          : null}
          {hover == index ? 
          <CustomizedImageListItemBarDesktop
            sx={{
              background: 'rgba(0,0,0,0.4) 65%',
              'textAlign': 'center',
              height: '100%',
            }}
            title={item.title}
          />
          : null}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Work;