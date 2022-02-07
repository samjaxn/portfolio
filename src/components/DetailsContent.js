import React from 'react';
import '../css/Details.css';

const DetailsContent = (props) => {
  return (
  	<div className='center'>
			<img className='centerImg' src={`${props.img}`} />
			<img className='centerImg' src={`${props.img}`} />
		</div>
	);
};

export default DetailsContent;
