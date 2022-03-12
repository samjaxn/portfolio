import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import Anime from 'react-anime';
import '../css/Details.css';

const DetailsContent = (props) => {
	console.log(props.content);
	const [isLoaded, setIsLoaded] = useState(false);

  return (
  	<div key={props.keyName} className='center'>
			<Anime
				easing="easeInOutExpo"
				direction="normal"
				translateY={['1rem', '0rem']}
				opacity={[0, 1]}
				delay={(el, index) => 175 + index * 125}
			>
			{props.content.map((content, index) => {
				if(content.type === 'link'){
					return(
						<div className="embed-container">
							<ReactPlayer
								url={content.source}
								className='react-player'
								controls={true}
								width='100%'
								height='100%'
							/>
						</div>
					);
				}
				else if(content.type === 'video'){
					return(
						<div className='centerImg'>
						<ReactPlayer
							url={content.source}
							playing={true}
							loop={true}
							volume={0}
							muted={true}
							width='100%'
         	 				height='100%'
						/>
						</div>
					);
				}
				return(
					<img
						onLoad={() => {
							setIsLoaded(true);
						}}
						className='centerImg imageLoad'
						style={{ opacity: isLoaded ? 1 : 0 }}
						src={content.source}
					/>
				);
			})}
			</Anime>
		</div>
	);
};

export default DetailsContent;