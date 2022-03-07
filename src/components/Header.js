import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { isMobile } from 'react-device-detect';
import '../css/Header.css';
import logo from '../content/logo/logo.png';

const NavigationLinks = () => {
	let navigate = useNavigate();
	const location = useLocation();

	return (
    <React.Fragment>
		<div style={{display: 'inline-block'}}>
			<h3 className={location.pathname !== '/about' && location.pathname !== '/contact' ? 'selected' : 'selectedTransparent' } onClick={e => navigate('/')} >WORK</h3>
			<h3 className={location.pathname == '/about' ? 'selected' : 'selectedTransparent' } onClick={e => navigate('/about')}>ABOUT</h3>
			<h3 className={location.pathname == '/contact' ? 'selected' :'selectedTransparent' } onClick={e => navigate('/contact')}>CONTACT</h3>
    	</div>
	</React.Fragment>
  );
}

const Header = () => {
  let navigate = useNavigate();

  return (
		<header className={!isMobile ? 'root header' : 'header'}>
			<Box sx={{ flexGrow: 1 }} width={'100%'}>
				<Grid container spacing={2} alignItems="center" justifyContent="space-between">
					<Grid item xs={12} sm={5} md={4} className='navTitle left'>
						<img src={logo} className='logo pointer' alt="Jacky Jackson" onClick={e => navigate('/')}/>
					</Grid>
					<Grid item xs={12} sm={7} md={8} className='navTitle navigationAlign'>
						<NavigationLinks />
					</Grid>
				</Grid>
			</Box>
		</header>
  );
};

export default Header;