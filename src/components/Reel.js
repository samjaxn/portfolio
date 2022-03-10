import React from 'react';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player/lazy'
import '../css/Details.css';

const Reel = (props) => {

  const reelLink = `https://vimeo.com/686538136`;

  return (
		<Grid container spacing={3}>
			<Grid item xs={1}>
			</Grid>
			<Grid item xs={12} lg={10}>
        <div className="embed-container">
          <ReactPlayer
            url={reelLink}
            className='react-player'
            controls={true}
            width='100%'
            height='100%'
          />
        </div>
			</Grid>
      <Grid item xs={1}>
			</Grid>
		</Grid>
  );
};

export default Reel;