import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  root: {
    position: "sticky",
		top: "0rem",
		'z-index': 1,
		background: '#000',
  },

	selected: {
		'border-bottom': '1px solid',
		color: '#ffffff',
		margin: 0,
		display: 'inline-flex',
	},

	selectedTransparent: {
		'border-bottom': '1px solid transparent',
		margin: 0,
		display: 'inline-flex',
	}
});

const NavigationLinks = () => {
	let navigate = useNavigate();
	const location = useLocation();

	const classes = useStyles();

	// const [selected, setSelected] = useState('/');

	// const navClick = (route, name) => {
	// 	setSelected(route);
		
	// 	navigate(route);
	// 	console.log(name);
	// }

	// useEffect(() => {
	// 	console.log(location.pathname);
	// 	setSelected(location.pathname);
	// });

	// return (
  //   <React.Fragment>
  //     <Grid item xs={4}>
	// 			<h3 className={selected !== '/about' || selected !== '/contact' ? classes.selected : classes.selectedTransparent } onClick={e => navClick('/', 'work')} >WORK</h3>
  //     </Grid>
  //     <Grid item xs={4}>
	// 			<h3 className={selected == '/about' ? classes.selected : classes.selectedTransparent } onClick={e => navClick('/about', 'about')}>ABOUT</h3>
  //     </Grid>
  //     <Grid item xs={4}>
	// 			<h3 className={selected == '/contact' ? classes.selected : classes.selectedTransparent } onClick={e => navClick('/contact', 'contact')}>CONTACT</h3>
  //     </Grid>
  //   </React.Fragment>
  // );

	return (
    <React.Fragment>
      <Grid item xs={4}>
				<h3 className={location.pathname !== '/about' && location.pathname !== '/contact' ? classes.selected : classes.selectedTransparent } onClick={e => navigate('/')} >WORK</h3>
      </Grid>
      <Grid item xs={4}>
				<h3 className={location.pathname == '/about' ? classes.selected : classes.selectedTransparent } onClick={e => navigate('/about')}>ABOUT</h3>
      </Grid>
      <Grid item xs={4}>
				<h3 className={location.pathname == '/contact' ? classes.selected : classes.selectedTransparent } onClick={e => navigate('/contact')}>CONTACT</h3>
      </Grid>
    </React.Fragment>
  );
}

const Header = () => {
	let navigate = useNavigate();
	const classes = useStyles();

  return (
		<header className={!isMobile ? classes.root : null}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} alignItems="center" justifyContent="space-between">
					<Grid item xs={12} sm={6} md={6} className='navTitle left logo'>
						<h2 className='marginZero'>JACKY JACKSON</h2>
						3D MOTION DESIGNER
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
