import React from 'react';
import { Icon } from '@iconify/react';
import Grid from '@mui/material/Grid';
import '../css/Footer.css';

const Footer = () => {

  const iconClick = (icon) => {
    let link = 'https://www.instagram.com/jackyjacksn/';
    if(icon === 'twitter'){
      link = 'https://twitter.com/jackyjackson_'
    }
    else if(icon === 'vimeo'){
      link = 'https://vimeo.com/jackyjackson'
    }
    window.open(link, "_blank");
  }

  return (
    <div className='footer'>
      <Icon
        icon="akar-icons:twitter-fill"
        width="1.5rem" height="1.5rem"
        className='icon'
        onClick={() => iconClick('twitter')}
      />
      <Icon
        icon="akar-icons:instagram-fill"
        width="1.5rem" height="1.5rem"
        className='icon'
        onClick={() => iconClick('instagram')}

      />
      <Icon
        icon="mdi:vimeo"
        width="1.5rem" height="1.5rem"
        className='icon'
        onClick={() => iconClick('vimeo')}

      />
    </div>
  )
};

export default Footer;
