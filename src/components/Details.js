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
	//console.log(props.item);

  return (
			<Grid container spacing={0}>
				<Grid item xs={12} md={4} lg={4} xl={4}>
					<DetailsInfo title={props.item.title} info={props.item.info}/>
				</Grid>
				<Grid item xs={12} md={8} lg={7} xl={6}>
					<DetailsContent img={props.item.img} content={props.item.content}/>
				</Grid>
			</Grid>
  );
};

export default Details;
