import React from 'react';
import Grid from '@mui/material/Grid';

const About = () => {
  return (
    <Grid container spacing={3}>
				<Grid item xs={12} sm={6}></Grid>
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
