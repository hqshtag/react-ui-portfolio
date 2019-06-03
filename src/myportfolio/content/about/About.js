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
	return (
		<div className="about card" style={styleCard}>
			<h1 className="card-title" style={styleTitle}>
				About me
			</h1>
			<p className="about-paragraph" style={styleP}>
				I'm a web developer, I have High-School Diploma major Computer Science and Studying to get a Higher
				National Diploma in software development. I'm a self-taught programmer, currently specializing in full
				stack web development. <br />
				I'm excellent in algorithms, problem solving and understanding new concepts. I'm a quick learner and I
				learn something new everyday and I won't have a problem with learning new programming languages. <br />
			</p>
		</div>
	);
}

export default About;

//helper
/*
const getRandomFrom = (Array) => {
	return Array[Math.floor(Math.random() * Array.length)];
};*/
