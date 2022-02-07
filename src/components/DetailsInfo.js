import React from 'react';
import { makeStyles } from "@mui/styles";
import { StickyContainer, Sticky } from 'react-sticky';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  root: {
    position: "sticky",
		top: `${isMobile ? 1 : 8}rem`,
  },

	p: {
		'marginBottom': 0,
	}
});

const DetailsInfo = (props) => {
	const classes = useStyles();

  return (
  	<div className={classes.root}>
			<h2>{props.title}</h2>
			<p className={classes.p}>I dont know just some filler text</p>
		</div>
		// <StickyContainer>
		// 	<Sticky>{({ style }) =>	<h2>{props.title}</h2>}</Sticky>
		// </StickyContainer>
	);
};

export default DetailsInfo;
