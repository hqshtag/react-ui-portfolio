import React from 'react';

function ProjectCard(props) {
	const key = props.id;
	props = props.data;

	const projectCardStyle = {
		display: 'flex',
		width: '350px',
		height: '200px',
		background: '#39095b'
	};
	const projectImgStyle = {
		height: '200px',
		width: '300px'

		//borderRadius: '12px',
	};

	const projectTitleStyle = {
		fontSize: '24px',
		letterSpacing: '3px',
		fontFamily: 'Lato',
		fontWeight: '1200',
		color: 'white',

		marginLeft: '10px'
	};
	const projectDiscriptionStyle = {
		color: 'whitesmoke',
		fontSize: '16px',
		marginLeft: '14px'
	};
	const projectLinkStyle = {
		//display: 'flex',
		color: 'whitesmoke',
		fontSize: '16px',
		marginLeft: '14px'
	};
	return (
		<div className="project-card" id={`card-${key}`} style={projectCardStyle}>
			{/* <button onClick={props.down}>left</button>
			<button onClick={props.up}>right</button> */}

			<img
				className="thumbnail"
				src={props.thumbnail}
				alt="project thumbnail awesomeeeeeee"
				style={projectImgStyle}
			/>

			<div>
				<h3 className="project-name" style={projectTitleStyle}>
					{props.title}
				</h3>

				<p className="project-discription" style={projectDiscriptionStyle}>
					<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Discription: </span>
					{props.disc}
				</p>
				<div className="project-link" style={projectLinkStyle}>
					<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Link: </span>
					<a href={props.link} target="_blank" className="link" rel="noopener noreferrer">
						<p>Check me out</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
