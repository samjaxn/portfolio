import React from 'react';
import { makeStyles } from "@mui/styles";
import { StickyContainer, Sticky } from 'react-sticky';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  root: {
    position: isMobile ? 'static' : 'sticky',
	top: `11rem`,
  },

	p: {
		'marginTop': 0,
		'marginBottom': 0,
	}
});

const DetailsInfo = (props) => {
	const classes = useStyles();

  return (
  	<div key={props.keyName} className={classes.root}>
			<h2>{props.title}</h2>
			{props.info.map((info, index) => (
				<p>{info}</p>
			))}
		</div>
		// <StickyContainer>
		// 	<Sticky>{({ style }) =>	<h2>{props.title}</h2>}</Sticky>
		// </StickyContainer>
	);
};

export default DetailsInfo;
