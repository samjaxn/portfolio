import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Anime from 'react-anime';
import me from '../content/about/me.jpg';
import '../css/About.css';

const About = () => {
	
	const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Grid container spacing={3} style={{paddingTop: '3rem', paddingBottom: '2rem'}}>
				<Grid item xs={12} md={6}>
					<Anime
						easing="easeInOutExpo"
						direction="normal"
						translateY={['1rem', '0rem']}
						opacity={[0, 1]}
						delay={175}
					>
						<img
							onLoad={() => {
								setIsLoaded(true);
							}}
							className='centerImg imageLoad aboutPic'
							style={{ opacity: isLoaded ? 1 : 0 }}
							src={me}
						/>
					</Anime>
				</Grid>
				<Grid item xs={12} md={6}>
					<Anime
						easing="easeInOutExpo"
						direction="normal"
						translateY={['1rem', '0rem']}
						opacity={[0, 1]}
						delay={(el, index) => 175 + index * 125}
					>
						<h2>Jacky Jackson</h2>
						<p>I'm a Toronto based Designer and Software Engineer who is in love with motion and 3D.</p>
						<p>I strive to work on technically challenging and complex projects that unite the bounds of abstraction and realism.</p>
						<p>My main tools are Cinema 4D, Houdini, Substance, Redshift, DaVinci Resolve and After Effects.</p>
					</Anime>
				</Grid>
		</Grid>
  );
};

export default About;
