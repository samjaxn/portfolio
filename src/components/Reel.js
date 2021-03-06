import React from 'react';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player/lazy'
import Anime from 'react-anime';
import '../css/Details.css';

const Reel = (props) => {

  const reelLink = `https://vimeo.com/686538136`;

  return (
		<Grid container spacing={3}>
			<Grid item xs={1}>
			</Grid>
			<Grid item xs={12} lg={10}>
      <Anime
				easing="easeInOutExpo"
				direction="normal"
        translateY={['1rem', '0rem']}
				opacity={[0, 1]}
				delay={(el, index) => 200 + index * 100}
			>
        <div className="embed-container">
          <ReactPlayer
            url={reelLink}
            className='react-player'
            controls={true}
            width='100%'
            height='100%'
          />
        </div>
        </Anime>
			</Grid>
      <Grid item xs={1}>
			</Grid>
		</Grid>
  );
};

export default Reel;