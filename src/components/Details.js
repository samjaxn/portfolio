import React from 'react';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import DetailsInfo from './DetailsInfo';
import DetailsContent from './DetailsContent';
import { StickyContainer, Sticky } from 'react-sticky';
import '../css/Details.css';

const Details = (props) => {
	// const {state} = useLocation();
	// const { img, title } = state; // Read values passed on state

  return (
			<Grid container spacing={0}>
				<Grid item xs={12} md={4}>
					<DetailsInfo title={props.item.title}/>
				</Grid>
				<Grid item xs={12} md={8}>
					<DetailsContent img={props.item.img}/>
				</Grid>
			</Grid>
  );
};

export default Details;
