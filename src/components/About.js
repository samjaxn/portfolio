import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import me from '../content/about/me.jpg';

const About = () => {
	
	const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<img
						onLoad={() => {
							setIsLoaded(true);
						}}
						className='centerImg imageLoad'
						style={{ opacity: isLoaded ? 1 : 0 }}
						src={me}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<h2>Jacky Jackson</h2>
					<p>I'm a Toronto based Designer and Software Engineer who is in love with motion and 3D.</p>
					<p>I strive to work on technically challenging and complex projects that unite the bounds of abstraction and realism.</p>
					<p>My main tools are Cinema4D, Houdini, Substance, Redshift, DaVinci Resolve and After Effects.</p>
				</Grid>
		</Grid>
  );
};

export default About;
