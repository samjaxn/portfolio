import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import '../css/Details.css';

const DetailsContent = (props) => {
	console.log(props.content);
	const [isLoaded, setIsLoaded] = useState(false);

  return (
  	<div className='center'>
			{/* <img
				onLoad={() => {
					setIsLoaded(true);
				}}
				className='centerImg imageLoad'
				style={{ opacity: isLoaded ? 1 : 0 }}
				src={`${props.img}`}
			/>
			<img
				onLoad={() => {
					setIsLoaded(true);
				}}
				className='centerImg imageLoad'
				style={{ opacity: isLoaded ? 1 : 0 }}
				src={`${props.img}`}
			/>

			<div className="embed-container">
				<iframe src="https://player.vimeo.com/video/679228445?h=5774d8174f" frameborder="0" allowfullscreen></iframe>
			</div> */}
			{/* {props.content.map((content, index) => (
				content.type == 'video'
				?
				<div className="embed-container">
					<iframe src={content.source} frameborder="0" allowfullscreen></iframe>
				</div>
				:
				<img
					onLoad={() => {
						setIsLoaded(true);
					}}
					className='centerImg imageLoad'
					style={{ opacity: isLoaded ? 1 : 0 }}
					src={content.source}
				/>
			))} */}
			{props.content.map((content, index) => {
				if(content.type === 'link'){
					return(
						// <div className="embed-container">
						// 	<iframe src={content.source} frameborder="0" allowfullscreen></iframe>
						// </div>
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
						<ReactPlayer
							url={content.source}
							playing={true}
							loop={true}
							volume={0}
							muted={true}
							width='100%'
         	 				height='100%'
						/>
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
		</div>
	);
};

export default DetailsContent;