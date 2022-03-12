import React from 'react';
import Anime from 'react-anime';
import '../css/Contact.css';

const Contact = () => {
  return (
		<div style={{paddingTop: '3rem', paddingBottom: '2rem'}}>
			<Anime
				easing="easeInOutExpo"
				direction="normal"
				translateY={['1rem', '0rem']}
				opacity={[0, 1]}
				delay={(el, index) => 175 + index * 125}
			>
				<h2>Contact</h2>
				<p>Always curious about new and interesting projects and people!</p>
				<p>Say hi to me via email: <b><a href="mailto:jacky@jackyj.io" className='email'>jacky@jackyj.io</a></b></p>
			</Anime>
		</div>
	);
};

export default Contact;
