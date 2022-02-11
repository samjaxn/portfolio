import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { isMobile } from 'react-device-detect';
import '../css/Header.css';

// const useStyles = makeStyles({
//  	 root: {
//     	position: "sticky",
// 		top: "0rem",
// 		'z-index': 1,
// 		background: '#000',
//   	},

// 	selected: {
// 		'border-bottom': '1px solid',
// 		color: '#ffffff',
// 		margin: 0,
// 		display: 'inline-flex',
// 	},

// 	selectedTransparent: {
// 		'border-bottom': '1px solid transparent',
// 		margin: 0,
// 		display: 'inline-flex',
// 	}
// });

const NavigationLinks = () => {
	let navigate = useNavigate();
	const location = useLocation();

	return (
    <React.Fragment>
      <Grid item xs={4}>
				<h3 className={location.pathname !== '/about' && location.pathname !== '/contact' ? 'selected' : 'selectedTransparent' } onClick={e => navigate('/')} >WORK</h3>
      </Grid>
      <Grid item xs={4}>
				<h3 className={location.pathname == '/about' ? 'selected' : 'selectedTransparent' } onClick={e => navigate('/about')}>ABOUT</h3>
      </Grid>
      <Grid item xs={4}>
				<h3 className={location.pathname == '/contact' ? 'selected' :'selectedTransparent' } onClick={e => navigate('/contact')}>CONTACT</h3>
      </Grid>
    </React.Fragment>
  );
}

const Header = () => {
	let navigate = useNavigate();

  return (
		<header className={!isMobile ? 'root' : null}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} alignItems="center" justifyContent="space-between">
					<Grid item xs={12} sm={6} md={6} className='navTitle left logo'>
						{/* <div className='pointer'> */}
						<h2 className='marginZero'><a className='pointer' onClick={e => navigate('/')}>JACKY JACKSON</a></h2>
						3D MOTION DESIGNER
						{/* </div> */}
					</Grid>
					<Grid container item xs={12} sm={6} md={5} className='navTitle right'>
						<NavigationLinks />
					</Grid>
				</Grid>
			</Box>
		</header>
  );
};

export default Header;
