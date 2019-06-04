import React from 'react';
//import resumee from './info';

function About() {
	//let rsm = getRandomFrom(resumee);
	const styleCard = {
		background: '#1E2545',
		paddingBottom: '5px',
		margin: 'auto 10px'
	};
	const styleTitle = {
		color: 'white',
		padding: '20px',
		fontSize: '32px',
		fontWeight: '500',
		marginLeft: '20px',
		marginBottom: '-20px'
	};
	const styleP = {
		background: '#3C4A8A',
		fontSize: '22px',
		fontWeight: '300',
		color: 'white',
		borderRight: '16px solid #0066FF',
		padding: '33px',
		margin: '15px'
		//color: 'red'
	};

	const emph = {
		color: getRandomFrom(vividColor),
		fontWeight: 'bold'
	};
	return (
		<div className="about card" style={styleCard}>
			<h1 className="card-title" style={styleTitle}>
				About me
			</h1>
			<p className="about-paragraph" style={styleP}>
				Hey, I'm a <span style={emph}>self-taught programmer</span>, currently specializing in web development.
				I have 4 years of experience in <span style={emph}>full stack</span> development. I'm a hardcode
				developer and go by "simple and efficient" in the design departement. <br />
				I aim to build <span style={emph}>fast</span>, fully responsive{' '}
				<span style={emph}>webapps and REST APIS</span> with many different tools and frameworks; you can check
				my skill set below and if you can't find what your are looking for then contact me because I probably
				learned that already and didn't upload this yet. <br />
			</p>
		</div>
	);
}

export default About;

//helper

const getRandomFrom = (Array) => {
	return Array[Math.floor(Math.random() * Array.length)];
};

const vividColor = [ '#6FDA44', '#faff00', '#54ff00', '#ff0077', '#00fffa', '#00ff87', '#ff00ff' ];
