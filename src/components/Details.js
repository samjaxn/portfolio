import React from 'react';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import DetailsInfo from './DetailsInfo';
import DetailsContent from './DetailsContent';
import { StickyContainer, Sticky } from 'react-sticky';
import '../css/Details.css';

const Details = (props) => {

  return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={4} lg={4} xl={4}>
				<DetailsInfo key={`${props.item.url}-info`} keyName={`${props.item.url}-info`} title={props.item.title} info={props.item.info}/>
			</Grid>
			<Grid item xs={12} md={8} lg={8} xl={8}>
				<DetailsContent key={`${props.item.url}-info`} keyName={`${props.item.url}-content`} img={props.item.img} content={props.item.content}/>
			</Grid>
		</Grid>
  );
};

export default Details;
